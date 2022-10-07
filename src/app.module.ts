import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import 'dotenv/config';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { XlsxioModule } from './xlsxio/xlsxio.module';
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
@Module({
  imports: [
     /* TypeOrmModule.forRoot({
      type: 'mongodb',
      host: DB_HOST,
      port: Number(DB_PORT),
      username: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      entities: [User,Todo,ProductEntity,CartEntity,OrderEntity,ACCESSS_CONTROL],
      synchronize: false,
      useUnifiedTopology: true,
      authMechanism: 'DEFAULT',
      authSource: 'admin',
      logging: true
    }), */
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    XlsxioModule
    
    
  ]
})
export class AppModule {}
