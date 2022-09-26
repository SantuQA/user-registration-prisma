import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { AuthService } from 'src/auth/auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [TodosController],
  providers: [TodosService,AuthService],
  exports:[TodosService]
})
export class TodosModule {}
