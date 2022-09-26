import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserController } from '../user/user.controller';
import { LocalStrategy } from './local.strategy';
import { TodosService } from 'src/todos/todos.service';
import { TodosController } from 'src/todos/todos.controller';
import { SessionSerializer } from './session.serializer';
import { ProductsService } from '../ecommerce/products/products.service';
import { ProductsController } from '../ecommerce/products/products.controller';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'TheQA',
        signOptions: {
          expiresIn: '60m',
        },
      }),
    }),
    
  ],
  providers: [
    LocalStrategy,
    JwtStrategy,
    AuthService,
    UserService,
    TodosService,
    SessionSerializer,
    ProductsService
  ],
  controllers: [AuthController, UserController, TodosController,ProductsController],
  exports: [AuthService],
})
export class AuthModule {}
