import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  HttpCode,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AccessController, USER_TYPES } from 'src/user/role.enum';
import { SessionGuard } from 'src/auth/session.guard';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('todos')
@ApiTags('Todos api')
export class TodosController {
  constructor(
    private readonly todosService: TodosService,
    private readonly prismaService: PrismaService,
  ) {}
  getControllerName() {
    return AccessController.TODO_CONTROLLER;          // ASSIGN CONTROLLER NAME
  }
  @UseGuards(SessionGuard)
  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create todo' })
  async create(@Body() createTodoDto: CreateTodoDto, @Request() req) {
    const user = req.user;
    const _controllername = this.getControllerName();
    var filter = {
      where: {
        AND: [{ userId: user.id }, { controllerName: _controllername }],
      },
    };
    const existingPermission =
      await this.prismaService.aCCESSS_CONTROL_Master.findMany(filter);
    if (existingPermission.length > 0 || user.userType == USER_TYPES.ADMIN) {
      return this.todosService.create(createTodoDto, user.id);
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }
  @UseGuards(SessionGuard)
  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get all todo' })
  async findAll(@Request() req) {
    const user = req.user;
    const _controllername = this.getControllerName();
    var filter = {
      where: {
        AND: [{ userId: user.id }, { controllerName: _controllername }],
      },
    };
    const existingPermission =
      await this.prismaService.aCCESSS_CONTROL_Master.findMany(filter);
    if (existingPermission.length > 0 || user.userType == USER_TYPES.ADMIN) {
      return this.todosService.findAll();
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }
  @UseGuards(SessionGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get todo by id' })
  @Get(':id')
  async findOne(@Param('id') id: string,@Request() req) {
    const user = req.user;
    const _controllername = this.getControllerName();
    var filter = {
      where: {
        AND: [{ userId: user.id }, { controllerName: _controllername }],
      },
    };
    const existingPermission =
      await this.prismaService.aCCESSS_CONTROL_Master.findMany(filter);
    if (existingPermission.length > 0 || user.userType == USER_TYPES.ADMIN) {
      return this.todosService.findOne(id);
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }

  @UseGuards(SessionGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update todo by id' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto,@Request() req) {
    const user = req.user;
    const _controllername = this.getControllerName();
    var filter = {
      where: {
        AND: [{ userId: user.id }, { controllerName: _controllername }],
      },
    };
    const existingPermission =
      await this.prismaService.aCCESSS_CONTROL_Master.findMany(filter);
    if (existingPermission.length > 0 || user.userType == USER_TYPES.ADMIN) {
      return this.todosService.update(id, updateTodoDto);
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }
  @UseGuards(SessionGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete todo by id' })
  @Delete(':id')
  async remove(@Param('id') id: string,@Request() req) {
    const user = req.user;
    const _controllername = this.getControllerName();
    var filter = {
      where: {
        AND: [{ userId: user.id }, { controllerName: _controllername }],
      },
    };
    const existingPermission =
      await this.prismaService.aCCESSS_CONTROL_Master.findMany(filter);
    if (existingPermission.length > 0 || user.userType == USER_TYPES.ADMIN) {
      return this.todosService.remove(id);
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }
}
