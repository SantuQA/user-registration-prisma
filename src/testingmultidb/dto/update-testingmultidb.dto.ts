import { PartialType } from '@nestjs/swagger';
import { CreateTestingmultidbDto } from './create-testingmultidb.dto';

export class UpdateTestingmultidbDto extends PartialType(CreateTestingmultidbDto) {}
