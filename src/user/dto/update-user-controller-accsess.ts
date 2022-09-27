 import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
// import { CreateUserDto } from './create-user.dto';

export class UpdateUserControllerAccessDto{
    @ApiProperty()
    userId: string;
    @ApiProperty()
    access_controller: Prisma.ACCESSS_CONTROL_MasterCreateManyInput[];
}

  