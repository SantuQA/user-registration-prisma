import { Injectable } from '@nestjs/common';
import { async } from 'rxjs';
import { Prisma2Service } from 'src/prisma2/prisma2.service';
import { CreateTestingmultidbDto } from './dto/create-testingmultidb.dto';
import { UpdateTestingmultidbDto } from './dto/update-testingmultidb.dto';

@Injectable()
export class TestingmultidbService {
  constructor(
    private readonly prisma2Service: Prisma2Service,
  ) {}
  async create(createTestingmultidbDto: CreateTestingmultidbDto) {
    return await this.prisma2Service.test.create({data:{name:createTestingmultidbDto.name}});
  }

  findAll() {
    return this.prisma2Service.test.findMany();
  }

  async findOne(_id: string) {
    return await this.prisma2Service.test.findUnique({
      where: { id: _id },
    });
  }
}
