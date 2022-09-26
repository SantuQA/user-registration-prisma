import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { CreateTodoDto } from './create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsOptional()
  @ApiProperty()
  title: string;
  @IsOptional()
  @ApiProperty()
  completed: boolean;
}
