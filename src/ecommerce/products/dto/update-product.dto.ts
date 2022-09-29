import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @ApiProperty()
    name?: string;
    @ApiProperty()
    price?: number;
    @ApiProperty()
    quantity?: number;
}
