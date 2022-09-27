import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  NotFoundException,
  UnauthorizedException,
  Request,
  HttpCode,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SessionGuard } from 'src/auth/session.guard';
import { UpdatePermissionDto } from './dto/update-user-permission';
import { AccessController, USER_TYPES } from './role.enum';
import { UpdateUserControllerAccessDto } from './dto/update-user-controller-accsess';

@ApiBearerAuth()
@ApiTags('These are only for admin!')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
   
  }
  getControllerName(){
    return AccessController.USER_CONTROLLER;
  }
 
  @UseGuards(SessionGuard)
  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create user' })
  create(@Body() createUserDto: CreateUserDto, @Request() req) {
    const user = req.user;
    if (user.userType == 'ADMIN') {
      return this.userService.create(createUserDto);
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }
  @UseGuards(SessionGuard)
  @Post('permission')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update user permission' })
  updateUserPermission(
    @Body() updatePermissionDto: UpdatePermissionDto,
    @Request() req,
  ) {
    const user = req.user;
    if (user.userType == USER_TYPES.ADMIN) {
      return this.userService.createUserPermission(updatePermissionDto);
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }
  @UseGuards(SessionGuard)
  @Post('accesscontrol/:id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update user access controller' })
  updateUserControllerAccess(
    @Body() updateUserControllerAccessDto : UpdateUserControllerAccessDto,
    @Request() req,
  ) {
    console.log(updateUserControllerAccessDto);
    const user = req.user;
    if (user.userType == USER_TYPES.ADMIN) {
      return this.userService.updateUserControllerAccess(updateUserControllerAccessDto);
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }
  @UseGuards(SessionGuard)
  @Post('removeaccesscontrol/:id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Remove user access controller' })
  removeUserControllerAccess(
    @Body() updateUserControllerAccessDto : UpdateUserControllerAccessDto,
    @Request() req,
  ) {
    const user = req.user;
    if (user.userType == USER_TYPES.ADMIN) {
      return this.userService.removeUserControllerAccess(updateUserControllerAccessDto);
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }
  @UseGuards(SessionGuard)
  @Post('viewaccesscontrol/:id')
  @HttpCode(200)
  @ApiOperation({ summary: 'View user access controller by Id' })
  viewControllerAccessById(
    @Param('id') id : string,
    @Request() req,
  ) {
    const user = req.user;
    if (user.userType == USER_TYPES.ADMIN) {
      return this.userService.viewUserControllerAccessByID(id);
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }
  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get all users' })
  findAll(@Request() req) {
    //console.log(this.getControllerName());
    //return this.userService.findAll();
     const user = req.user;
    if (user.userType == USER_TYPES.ADMIN) {
      return this.userService.findAll();
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }
  @Get('/:id')
  @UseGuards(SessionGuard)
  @ApiBearerAuth()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get user by id' })
  findOne(@Param('id') id: string, @Request() req) {
    const user = req.user;
    if (user.userType == USER_TYPES.ADMIN) {
      const find_user = this.userService.findOne(id);
      if (!find_user) {
        throw new NotFoundException('user not found');
      }
      return find_user;
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }
  @Patch(':id')
  @UseGuards(SessionGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update user by id' })
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Request() req,
  ) {
    const user = req.user;
    if (user.userType == USER_TYPES.ADMIN) {
      return this.userService.update(id, updateUserDto);
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }
  @Delete(':id')
  @UseGuards(SessionGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Remove a user by id' })
  remove(@Param('id') id: string, @Request() req) {
    const user = req.user;
    if (user.userType == USER_TYPES.ADMIN) {
      return this.userService.remove(id);
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }
  @Post('getallcontroller')
  @UseGuards(SessionGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get all controller' })
  findAllController(@Request() req) {
    const user = req.user;
    if (user.userType == USER_TYPES.ADMIN) {
      //return "hi";
      return this.userService.findAllControllerName();
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }
}
