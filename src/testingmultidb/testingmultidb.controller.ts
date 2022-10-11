import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestingmultidbService } from './testingmultidb.service';
import { CreateTestingmultidbDto } from './dto/create-testingmultidb.dto';
import { UpdateTestingmultidbDto } from './dto/update-testingmultidb.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Work with another database')
@Controller('testingmultidb')
export class TestingmultidbController {
  constructor(private readonly testingmultidbService: TestingmultidbService) {}

  @Post()
  create(@Body() createTestingmultidbDto: CreateTestingmultidbDto) {
    return this.testingmultidbService.create(createTestingmultidbDto);
  }

  @Get()
  findAll() {
    return this.testingmultidbService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testingmultidbService.findOne(id);
  }
}
