import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient as PrismaClient2 } from 'prisma/generated/client2';

@Injectable()
export class Prisma2Service extends PrismaClient2
implements OnModuleInit {
  constructor(config: ConfigService){
      super({
          datasources:{
              db:{
                  url: config.get('DATABASE_URL_TWO'),
              }
          }
      })
  }

async onModuleInit() {
  await this.$connect();
}

async enableShutdownHooks(app: INestApplication) {
  this.$on('beforeExit', async () => {
    await app.close();
  });    
}
}