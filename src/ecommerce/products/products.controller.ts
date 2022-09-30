import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode,Request,UnauthorizedException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AccessController, USER_TYPES } from 'src/user/role.enum';
import { SessionGuard } from 'src/auth/session.guard';
import { PrismaService } from 'src/prisma/prisma.service';
import { UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Req } from '@nestjs/common';
import { UploadedFile } from '@nestjs/common';
import { fileURLToPath } from 'url';
import { UploadFileDto } from './dto/localFile.dto';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService, private readonly prismaService: PrismaService) {}
  getControllerName(){
    return AccessController.PRODUCT_CONTROLLER;
  }
  @UseGuards(SessionGuard)
  @HttpCode(201)
  @ApiOperation({ summary: 'Create product' })
  @Post()
  async create(@Body() createProductDto: CreateProductDto,@Request() req) {
    const user = req.user;
    const _controllername = this.getControllerName();
    var filter = {
      where: {
        AND: [{ userId: user.id }, { controllerName: _controllername }],
      },
    };
    const existingPermission =
      await this.prismaService.aCCESSS_CONTROL_Master.findMany(filter);
    if (existingPermission.length > 0 || user.userType == USER_TYPES.ADMIN) {
      //return this.todosService.create(createTodoDto, user.id);
      return this.productsService.create(createProductDto,user.id);
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }

  @UseGuards(SessionGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get all products' })
  @Get()
  async findAll(@Request() req) {
    const user = req.user;
    const _controllername = this.getControllerName();
    var filter = {
      where: {
        AND: [{ userId: user.id }, { controllerName: _controllername }],
      },
    };
    const existingPermission =
      await this.prismaService.aCCESSS_CONTROL_Master.findMany(filter);
    if (existingPermission.length > 0 || user.userType == USER_TYPES.ADMIN) {
      return this.productsService.findAll();
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }

  @UseGuards(SessionGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Get product by id' })
  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req) {
    
    const user = req.user;
    const _controllername = this.getControllerName();
    var filter = {
      where: {
        AND: [{ userId: user.id }, { controllerName: _controllername }],
      },
    };
    const existingPermission =
      await this.prismaService.aCCESSS_CONTROL_Master.findMany(filter);
    if (existingPermission.length > 0 || user.userType == USER_TYPES.ADMIN) {
      return this.productsService.findOne(id);
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }

  @UseGuards(SessionGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Update product by id' })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto,@Request() req) {
    
    const user = req.user;
    const _controllername = this.getControllerName();
    var filter = {
      where: {
        AND: [{ userId: user.id }, { controllerName: _controllername }],
      },
    };
    const existingPermission =
      await this.prismaService.aCCESSS_CONTROL_Master.findMany(filter);
    if (existingPermission.length > 0 || user.userType == USER_TYPES.ADMIN) {
      return this.productsService.update(id, updateProductDto);
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }

  @UseGuards(SessionGuard)
  @HttpCode(200)
  @ApiOperation({ summary: 'Remove product by id' })
  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req) {
   
    const user = req.user;
    const _controllername = this.getControllerName();
    var filter = {
      where: {
        AND: [{ userId: user.id }, { controllerName: _controllername }],
      },
    };
    const existingPermission =
      await this.prismaService.aCCESSS_CONTROL_Master.findMany(filter);
    if (existingPermission.length > 0 || user.userType == USER_TYPES.ADMIN) {
      return this.productsService.remove(id);
    } else {
      throw new UnauthorizedException('You are not authorised!');
    }
  }
  @Post('productimg')
  @UseGuards(SessionGuard)
  @ApiConsumes("multipart/form-data")
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploadedFiles/productImg',
      filename:(req, file, cb) => {
        const fileNameSplit = file.originalname.split(".");
        const fileExt = fileNameSplit[fileNameSplit.length - 1];
        const fileOriginalName = fileNameSplit[0];
        const fileOriginalNameHaveSpace = file.originalname.split('');
        if (fileOriginalNameHaveSpace.length > 0) {
          const FileName = file.originalname.split(' ').join('_');
          const newFileName = FileName.split(".")[0];
          cb(null, `${newFileName}_${Date.now()}.${fileExt}`);
        } else {
          const fname =fileOriginalName.split(".")[0];
          cb(null, `${fname}_${Date.now()}.${fileExt}`);
        }
        
      }
    })
  }))
  async save(@UploadedFile() fileURLToPath : Express.Multer.File, @Body() body: UploadFileDto){
    console.log(fileURLToPath);
    return;
  }
  // async addAvatar(@Req() req, @UploadedFile() file: Express.Multer.File) {
  //   const user = req.user;
  //   return this.productsService.addProductImg(user.id, {
  //     path: file.path,
  //     filename: file.originalname,
  //     mimetype: file.mimetype
  //   });
  // }
}
