import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    private readonly prismaService: PrismaService
    ){}
  async create(createProductDto: CreateProductDto, user_id: string) {
    var productData = {
      data: {
        userId: user_id,
        name: createProductDto.name,
        price: createProductDto.price,
        quantity: createProductDto.quantity,
        
      },
    };
    const saveProduct = await this.prismaService.productMaster.create(productData);
    //cart initialization here
    return {
      ...saveProduct
    };
  }

  async findAll() {
    return await this.prismaService.productMaster.findMany();
  }

  async findOne(_id: string) {
    return await this.prismaService.productMaster.findUnique({
      where: { id: _id },
    }); 
  }

  async update(_id: string, updateProductDto: UpdateProductDto) {
    const product_master = await this.prismaService.productMaster.findUnique({
      where: {
        id: _id,
      },
    });
    if (!product_master) {
      throw new NotFoundException(['todo does not exist!']);
    }
    return await this.prismaService.productMaster.updateMany({
      where: {
        id: _id,
      },
      data: {
        name : updateProductDto.name,
        price: updateProductDto.price,
        quantity: updateProductDto.quantity
      },
    });
  }

  async remove(_id: string) {
    const product_master = await this.prismaService.productMaster.findUnique({
      where: {
        id: _id,
      },
    });
    if (!product_master) {
      throw new NotFoundException(['todo does not exist!']);
    }
    return await this.prismaService.productMaster.delete({
      where: {
        id: _id,
      },
    });
  }
}
