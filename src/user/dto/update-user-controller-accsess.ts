 import { ApiProperty, } from '@nestjs/swagger';
import { Prisma } from 'prisma/generated/client1';

// import { CreateUserDto } from './create-user.dto';

export class UpdateUserControllerAccessDto{
    @ApiProperty()
    userId: string;
    @ApiProperty()
    access_controller: Prisma.ACCESSS_CONTROL_MasterCreateManyInput[];
}

  