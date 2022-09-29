import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode,Request,UnauthorizedException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AccessController, USER_TYPES } from 'src/user/role.enum';
import { SessionGuard } from 'src/auth/session.guard';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
