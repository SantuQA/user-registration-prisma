import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ProductImageUploadDto {
  @IsString()
  name: string;

  @ApiProperty({ type:'string', format:'binary' })
  file: any;
  @ApiProperty()
  productId: string;
  }