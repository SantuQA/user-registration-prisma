import { Length, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @Length(5)
  @ApiProperty()
  username: string;
  @Length(8)
  @ApiProperty()
  password: string;
  @Length(8)
  @ApiProperty()
  retypedPassword: string;
  @Length(2)
  @ApiProperty()
  firstName: string;
  @Length(2)
  @ApiProperty()
  lastName: string;
  @IsEmail()
  @ApiProperty()
  email: string;
}
