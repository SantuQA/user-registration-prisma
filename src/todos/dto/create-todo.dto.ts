import { Length, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateTodoDto {
  @ApiProperty()
  userId: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  completed: boolean;
}
