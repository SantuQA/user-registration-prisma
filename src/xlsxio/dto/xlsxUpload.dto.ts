import { ApiProperty } from "@nestjs/swagger";

export class xlsxFileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;
}
