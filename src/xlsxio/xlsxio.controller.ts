import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  HttpCode,
  Get,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { xlsxFileUploadDto } from './dto/xlsxUpload.dto';
import { readFile, utils } from 'xlsx';
import { join } from 'path';
import { Prisma } from '@prisma/client';
import { XlsxioService } from './xlsxio.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('xlsxio')
@ApiTags('Xlsx file Upload/Download')
export class XlsxioController {
  constructor(
    private readonly xlsxioService: XlsxioService,
    private readonly prismaService: PrismaService,
  ) {}
  @Post('uploadxlsx')
  @ApiOperation({ summary: 'Upload excel file' })
  @ApiConsumes('multipart/form-data')
  @HttpCode(201)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploadedFiles/xlsxFile',
        filename: (req, file, cb) => {
          const fileNameSplit = file.originalname.split('.');
          const fileExt = fileNameSplit[fileNameSplit.length - 1];
          const fileOriginalName = fileNameSplit[0];
          const fileOriginalNameHaveSpace = file.originalname.split('');
          if (fileOriginalNameHaveSpace.length > 0) {
            const FileName = file.originalname.split(' ').join('_');
            const newFileName = FileName.split('.')[0];
            cb(null, `${newFileName}_${Date.now()}.${fileExt}`);
          } else {
            const fname = fileOriginalName.split('.')[0];
            cb(null, `${fname}_${Date.now()}.${fileExt}`);
          }
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/\.(xlsx|xlsb|csv|xlsm|xls)$/)) {
          cb(null, true);
        } else {
          cb(null, false);
          return cb(
            new BadRequestException(
              'Only .xlsx, xlsb, csv, xlsm format allowed!',
            ),
            false,
          );
        }
      },
    }),
  )
  async uploadxlsxFile(
    @UploadedFile() fileURLToPath: Express.Multer.File,
    @Body() body: xlsxFileUploadDto,
  ) {
    console.log(fileURLToPath);
    const fileName = fileURLToPath.filename;
    const fileUrl = join(process.cwd(), 'uploadedFiles/xlsxFile/' + fileName);
    // Reading file
    const file = readFile(fileUrl);
    let data = [];
    const sheets = file.SheetNames;
    for (let i = 0; i < sheets.length; i++) {
      const temp = utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
      temp.forEach((res) => {
        data.push(res);
      });
    }
    var myJsonString = data as Prisma.JsonArray;
    const addmaster = await this.prismaService.customDataFromXlsMaster.create({
      data: { fileName: fileName },
    });
    for (let i = 0; i < myJsonString.length; i++) {
      var newarr = myJsonString[i] as Prisma.JsonArray;
      await this.prismaService.customDataFromXls.create({
        data: { extendedXlsData: newarr, xlsdataID: addmaster.id },
      });
    }
  }
  @Get('custom-data-xls/:fileName')
  @ApiOperation({ summary: 'Get data by excel file name' })
  async findProfileImage(@Param('fileName') xlsFilename: string) {
    //return of(res.sendFile(join(process.cwd(), 'uploadedFiles/xlsxFile/' + xlsFilename)));
    var jsonFilter = { Gender: 'Female' };
    var filter = {
      where: {
        AND: [{ fileName: xlsFilename }],
      },
    };
    const xls_master =
      await this.prismaService.customDataFromXlsMaster.findMany({
        where: {
          fileName: xlsFilename,
        },
      });
    if (xls_master.length < 1) {
      throw new NotFoundException(['file doesnot exist!']);
    }
    const list = await this.prismaService.customDataFromXls.findMany({
      where: {
        xlsdataID: xls_master[0].id,
      },
      select: {
        id: true,
        extendedXlsData: true,
      },
    });
    return list;
  }
}
