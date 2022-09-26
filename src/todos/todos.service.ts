import { Injectable, BadRequestException } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    private readonly authService: AuthService,
  ) {}
  
  async create(createTodoDto: CreateTodoDto, user: any, controller: string) {
    // const user_master = await this.userRepository.findOneById(user._id);

    // var filter = {
    //   $and: [{ userId: user_master._id }, { controllerName: controller }],
    // };
    // const existingPermission = await this.userAccessControllerRepository.findBy(
    //   filter,
    // );
    // if (existingPermission) {
    //   const todo = new Todo();
    //   todo.userId = createTodoDto.userId;
    //   todo.title = createTodoDto.title;
    //   todo.completed = createTodoDto.completed;
    //   return {
    //     ...(await this.todoRepository.save(todo)),
    //   };
    // } else {
    //   return 'You are not authorised!';
    // }
  }

  async findAll() {
    //return await this.todoRepository.find();
  }

  async findOne(id: string) {
    //return await this.todoRepository.findOneById(id);
  }
  // async findOneByUsername(userId: string) {
  //   const existingUserName = await this.todoRepository.findOne({
  //     where: { userId: userId },
  //   });
  //   if (!existingUserName) {
  //     throw new BadRequestException(['username not valid!']);
  //   }
  //   return existingUserName;
  // }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    // const property = await this.todoRepository.findOneById(id);
    // const todo = await this.todoRepository.findOneById(id);

    // return this.todoRepository.save({
    //   ...property,
    //   ...updateTodoDto,
    // });
  }

  async remove(id: string) {
    // const todo = await this.todoRepository.findOneById(id);
    // if (!todo) {
    //   throw new BadRequestException(['todo not found!']);
    // }
    // return await this.todoRepository.remove(todo);
  }
}
