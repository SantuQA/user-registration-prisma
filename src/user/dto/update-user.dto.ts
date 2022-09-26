import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  @ApiProperty()
  firstName: string;
  @IsOptional()
  @ApiProperty()
  lastName: string;
  @IsOptional()
  @ApiProperty()
  userType: string;
}
