import { ApiProperty } from '@nestjs/swagger';

export class UpdatePermissionDto {
  @ApiProperty()
  userId: string;
  @ApiProperty()
  read: boolean;
  @ApiProperty()
  write: boolean;
  @ApiProperty()
  modify: boolean;
  @ApiProperty()
  delete: boolean;
}
