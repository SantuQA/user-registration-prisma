import { Length, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @Length(5)
  @ApiProperty()
  username: string;
  @Length(8)
  @ApiProperty()
  password: string;
}
export class LoginBody {
  @ApiProperty()
  user: LoginUserDto;
}
