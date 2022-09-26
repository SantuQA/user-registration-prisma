import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, Request } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AccessController } from 'src/user/role.enum';
import { SessionGuard } from 'src/auth/session.guard';

@Controller('todos')
@ApiTags('Todos api')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  getControllerName(){
    return AccessController.TODO_CONTROLLER;
  }

  @UseGuards(SessionGuard)
  @Post()
  @HttpCode(201)
  @ApiOperation({ summary: 'Create todo' })
  create(@Body() createTodoDto: CreateTodoDto, @Request() req) {
    const user = req.user;
    const controllername = this.getControllerName();
    //console.log(user);
    return this.todosService.create(createTodoDto,user,controllername);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.remove(id);
  }
}
