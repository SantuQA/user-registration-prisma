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
    // const user = new User();
    // const permission = new User_Permission();
    // let updateUserRole: string;
    // const idByteCheck = ObjectID.isValid(updatePermissionDto.userId);
    // if (!idByteCheck) {
    //   throw new BadRequestException(['not a valid id']);
    // }
    // const user_master = await this.userRepository.findOneById(
    //   updatePermissionDto.userId,
    // );
    // if (!user_master) {
    //   throw new NotFoundException(['user does not exist!']);
    // }
    // const user_permission = await this.userPermissionRepository.findOne({
    //   where: { userId: updatePermissionDto.userId },
    // });
    // permission.read = updatePermissionDto.read;
    // permission.write = updatePermissionDto.write;
    // permission.modify = updatePermissionDto.modify;
    // permission.delete = updatePermissionDto.delete;
    // if (
    //   permission.read == true &&
    //   permission.write == true &&
    //   permission.modify == true &&
    //   permission.delete == true
    // ) {
    //   updateUserRole = USER_TYPES.ADMIN;
    // } else if (
    //   permission.read == true &&
    //   permission.write == false &&
    //   permission.modify == true &&
    //   permission.delete == false
    // ) {
    //   updateUserRole = USER_TYPES.EDITOR;
    // } else if (
    //   permission.read == true &&
    //   permission.write == false &&
    //   permission.modify == false &&
    //   permission.delete == false
    // ) {
    //   updateUserRole = USER_TYPES.USER;
    // }
    // user.userType = updateUserRole;
    // const updateUserMaster = this.userRepository.save({
    //   ...user_master, // existing fields
    //   ...user, // updated fields
    // });
    // const updateUserPermission = this.userRepository.save({
    //   ...user_permission, // existing fields
    //   ...permission, // updated fields
    // });
    // if (updateUserMaster && updateUserPermission) {
    //   return 'User Role Update Successfully';
    // }
  }
  async updateUserControllerAccess /* updateUserControllerAccessDto: UpdateUserControllerAccessDto */() {
    // const idByteCheck = ObjectID.isValid(updateUserControllerAccessDto.userId);
    // if (!idByteCheck) {
    //   throw new BadRequestException(['not a valid id']);
    // }
    // const user_master = await this.userRepository.findOneById(
    //   updateUserControllerAccessDto.userId,
    // );
    // if (!user_master) {
    //   throw new NotFoundException(['user does not exist!']);
    // }
    // let access_array = [];
    // access_array = updateUserControllerAccessDto.access_controller;
    // let cnt = 0;
    // for (let i = 0; i < access_array.length; i++) {
    //   const element = access_array[i];
    //   var filter = {
    //     $and: [{ userId: user_master._id }, { controllerName: element }],
    //   };
    //   const existingPermission =
    //     await this.userAccessControllerRepository.findBy(filter);
    //   if (existingPermission.length == 0) {
    //     await this.userAccessControllerRepository.save({
    //       controllerName: element,
    //       userId: user_master._id,
    //     });
    //     cnt += 1;
    //   }
    // }
    // //return `permission granted`;
    // if (cnt > 1) {
    //   return `permission granted`;
    // } else {
    //   return `permission already granted`;
    // }
  }
  async removeUserControllerAccess /* updateUserControllerAccessDto: UpdateUserControllerAccessDto, */() {
    // const idByteCheck = ObjectID.isValid(updateUserControllerAccessDto.userId);
    // if (!idByteCheck) {
    //   throw new BadRequestException(['not a valid id']);
    // }
    // const user_master = await this.userRepository.findOneById(
    //   updateUserControllerAccessDto.userId,
    // );
    // if (!user_master) {
    //   throw new NotFoundException(['user does not exist!']);
    // }
    // let access_array = [];
    // access_array = updateUserControllerAccessDto.access_controller;
    // for (let i = 0; i < access_array.length; i++) {
    //   const element = access_array[i];
    //   var filter = {
    //     $and: [{ userId: user_master._id }, { controllerName: element }],
    //   };
    //   const existingPermission =
    //     await this.userAccessControllerRepository.findBy(filter);
    //   let did: ObjectID;
    //   if (existingPermission.length > 0) {
    //     did = existingPermission[0]._id;
    //     const dpermission =
    //       await this.userAccessControllerRepository.findOneById(did);
    //     return await this.userAccessControllerRepository.remove(dpermission);
    //   } else {
    //     return `permission not found!`;
    //   }
    // }
  }
  async viewUserControllerAccessByID(id: string) {
    // const idByteCheck = ObjectID.isValid(id);
    // if (!idByteCheck) {
    //   throw new BadRequestException(['not a valid id']);
    // }
    // const user_master = await this.userRepository.findOneById(
    //   id,
    // );
    // if (!user_master) {
    //   throw new NotFoundException(['user does not exist!']);
    // }
    // var filter = {
    //   where: { userId: user_master._id },
    // };
    // const list =  await this.userAccessControllerRepository.findBy(filter);
    // return list;
  }
  async findAll() {
    return await this.prismaService.userMaster.findMany();
  }
  async findOne(id: string) {
    //return await this.userRepository.findOneById(id);
  }
  async findOneByUsername(username: string) {
    // const existingUserName = await this.userRepository.findOne({
    //   where: { username: username },
    // });
    // if (!existingUserName) {
    //   throw new BadRequestException(['username not valid!']);
    // }
    // return existingUserName;
  }
  async update(id: string, updateUserDto: UpdateUserDto) {
    // const property = await this.userRepository.findOneById(id);
    // return this.userRepository.save({
    //   ...property, // existing fields
    //   ...updateUserDto, // updated fields
    // });
  }
  async remove(id: string) {
    // const user = await this.userRepository.findOneById(id);
    // if (!user) {
    //   throw new BadRequestException(['userid not valid!']);
    // }
    // return await this.userRepository.remove(user);
  }
  async findAllControllerName() {
    return AccessController;
  }
}
