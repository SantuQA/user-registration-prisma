import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { XlsxioController } from './xlsxio.controller';
import { XlsxioService } from './xlsxio.service';

@Module({
  imports: [PrismaModule
  ],
  controllers: [XlsxioController],
  providers: [XlsxioService]
})
export class XlsxioModule {}
