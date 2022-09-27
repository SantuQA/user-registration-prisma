import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    private readonly authService: AuthService,
    private readonly prismaService: PrismaService,
  ) {}

  async create(createTodoDto: CreateTodoDto, user_id: string) {
    var todoData = {
      data: {
        userId:user_id,
        title: createTodoDto.title,
        completed: createTodoDto.completed,
      },
    };
    const saveTodo = await this.prismaService.todo.create(todoData)
    return {
      ...(saveTodo),
    };
  }

  async findAll() {
    return await this.prismaService.todo.findMany();
  }

  async findOne(_id: string) {
    return await this.prismaService.todo.findUnique({
      where: { id: _id },
    });
  }

  async update(_id: string, updateTodoDto: UpdateTodoDto) {
    const todo_master = await this.prismaService.todo.findUnique({
      where: {
        id: _id,
      },
    });
    if (!todo_master) {
      throw new NotFoundException(['todo does not exist!']);
    }
    return await this.prismaService.todo.updateMany({
      where: {
        id: _id,
      },
      data: {
        title: updateTodoDto.title,
        completed: updateTodoDto.completed,
      },
    });
  }

  async remove(_id: string) {
    const todo_master = await this.prismaService.todo.findUnique({
      where: {
        id: _id,
      },
    });
    if (!todo_master) {
      throw new NotFoundException(['todo does not exist!']);
    }
    return await this.prismaService.todo.delete({
      where: {
        id: _id,
      },
    });
  }
}
