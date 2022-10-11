import { Module } from '@nestjs/common';
import { TestingmultidbService } from './testingmultidb.service';
import { TestingmultidbController } from './testingmultidb.controller';
import { Prisma2Module } from 'src/prisma2/prisma2.module';

@Module({imports: [Prisma2Module
],
  controllers: [TestingmultidbController],
  providers: [TestingmultidbService]
})
export class TestingmultidbModule {}
