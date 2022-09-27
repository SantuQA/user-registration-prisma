import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdatePermissionDto } from './dto/update-user-permission';
import { AccessController, USER_TYPES } from './role.enum';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserControllerAccessDto } from './dto/update-user-controller-accsess';

@Injectable()
export class UserService {
  constructor(
    private readonly authService: AuthService,
    private readonly prismaService: PrismaService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    if (createUserDto.password !== createUserDto.retypedPassword) {
      throw new BadRequestException(['Passwords are not identical']);
    }
    const existingUserEmail = await this.prismaService.userMaster.findMany({
      where: {
        OR: [
          { email: createUserDto.email },
          { username: createUserDto.username },
        ],
      },
    });
    if (existingUserEmail.length > 0) {
      throw new BadRequestException(['username or email is already taken']);
    }
    var userData = {
      data: {
        username: createUserDto.username,
        password: await this.authService.hashPassword(createUserDto.password),
        email: createUserDto.email,
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        userType: USER_TYPES.USER,
      },
    };
    const saveUser = await this.prismaService.userMaster.create(userData);
    var permissionData = {
      data: {
        userId: saveUser.id,
        read: true,
        write: false,
        modify: false,
        delete: false,
      },
    };
    await this.prismaService.user_Permission_Master.create(permissionData);
    return {
      ...saveUser,
      token: this.authService.generateToken(userData.data),
    };
  }
  async createUserPermission(updatePermissionDto: UpdatePermissionDto) {
    let updateUserRole: string;
    const user_master = await this.prismaService.userMaster.findUnique({
      where: {
        id: updatePermissionDto.userId,
      },
    });
    if (!user_master) {
      throw new NotFoundException(['user does not exist!']);
    }

    if (
      updatePermissionDto.read == true &&
      updatePermissionDto.write == true &&
      updatePermissionDto.modify == true &&
      updatePermissionDto.delete == true
    ) {
      updateUserRole = USER_TYPES.ADMIN;
    } else if (
      updatePermissionDto.read == true &&
      updatePermissionDto.write == false &&
      updatePermissionDto.modify == true &&
      updatePermissionDto.delete == false
    ) {
      updateUserRole = USER_TYPES.EDITOR;
    } else if (
      updatePermissionDto.read == true &&
      updatePermissionDto.write == false &&
      updatePermissionDto.modify == false &&
      updatePermissionDto.delete == false
    ) {
      updateUserRole = USER_TYPES.USER;
    }
    const updateUsers = await this.prismaService.userMaster.updateMany({
      where: {
        email: user_master.email,
      },
      data: {
        userType: updateUserRole,
      },
    });
    const updateUserPermission =
      this.prismaService.user_Permission_Master.updateMany({
        where: {
          userId: updatePermissionDto.userId,
        },
        data: {
          read: updatePermissionDto.read,
          write: updatePermissionDto.write,
          modify: updatePermissionDto.modify,
          delete: updatePermissionDto.delete,
        },
      });
    if (updateUsers && updateUserPermission) {
      return 'User Role Update Successfully';
    }
  }
  async updateUserControllerAccess(
    updateUserControllerAccessDto: UpdateUserControllerAccessDto,
  ) {
    let access_array = [];
    const user_master = await this.prismaService.userMaster.findUnique({
      where: {
        id: updateUserControllerAccessDto.userId,
      },
    });
    if (!user_master) {
      throw new NotFoundException(['user does not exist!']);
    }
    access_array = updateUserControllerAccessDto.access_controller;
    let cnt = 0;
    for (let i = 0; i < access_array.length; i++) {
      const element = access_array[i];
      var filter = {
        where: {
          AND: [{ userId: user_master.id }, { controllerName: element }],
        },
      };
      const existingPermission =
        await this.prismaService.aCCESSS_CONTROL_Master.findMany(filter);
      if (existingPermission.length == 0) {
        var permissionData = {
          data: {
            controllerName: element,
            userId: user_master.id,
          },
        };
        await this.prismaService.aCCESSS_CONTROL_Master.create(permissionData);
        cnt += 1;
      }
    }
    if (cnt > 1) {
      return `permission granted`;
    } else {
      return `permission already granted`;
    }
  }
  async removeUserControllerAccess(
    updateUserControllerAccessDto: UpdateUserControllerAccessDto,
  ) {
    let access_array = [];
    const user_master = await this.prismaService.userMaster.findUnique({
      where: {
        id: updateUserControllerAccessDto.userId,
      },
    });
    if (!user_master) {
      throw new NotFoundException(['user does not exist!']);
    }
    access_array = updateUserControllerAccessDto.access_controller;
    let cnt = 0;
    for (let i = 0; i < access_array.length; i++) {
      const element = access_array[i];
      var filter = {
        where: {
          AND: [{ userId: user_master.id }, { controllerName: element }],
        },
      };
      const existingPermission =
        await this.prismaService.aCCESSS_CONTROL_Master.findMany(filter);
      if (existingPermission.length > 0) {
        return this.prismaService.aCCESSS_CONTROL_Master.delete({
          where: {
            id: existingPermission[0].id,
          },
        });
      } else {
        return `permission not found!`;
      }
    }
  }
  async viewUserControllerAccessByID(_id: string) {
    const user_master = await this.prismaService.userMaster.findUnique({
      where: {
        id: _id,
      },
    });
    if (!user_master) {
      throw new NotFoundException(['user does not exist!']);
    }
    const list = await this.prismaService.aCCESSS_CONTROL_Master.findMany({
      where: {
        userId: user_master.id,
      },
    });
    return list;
  }
  async findAll() {
    return await this.prismaService.userMaster.findMany();
  }
  async findOne(_id: string) {
    return await this.prismaService.userMaster.findUnique({
      where: { id: _id },
    });
  }
  async findOneByUsername(username: string) {
    const existingUserName = await this.prismaService.userMaster.findMany({
      where: { username: username },
    });
    if (existingUserName.length < 1) {
      throw new BadRequestException(['username not valid!']);
    }
    return existingUserName;
  }
  async update(_id: string, updateUserDto: UpdateUserDto) {
    const user_master = await this.prismaService.userMaster.findUnique({
      where: {
        id: _id,
      },
    });
    if (!user_master) {
      throw new NotFoundException(['user does not exist!']);
    }
    return await this.prismaService.userMaster.updateMany({
      where: {
        id: _id,
      },
      data: {
        firstName: updateUserDto.firstName,
        lastName: updateUserDto.lastName,
      },
    });
  }
  async remove(_id: string) {
    const user_master = await this.prismaService.userMaster.findUnique({
      where: {
        id: _id,
      },
    });
    if (!user_master) {
      throw new NotFoundException(['user does not exist!']);
    }
    return await this.prismaService.userMaster.delete({
      where: {
        id: _id,
      },
    });
  }
  async findAllControllerName() {
    return AccessController;
  }
}
