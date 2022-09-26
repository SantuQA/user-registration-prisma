import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from "dotenv";
import { DocumentBuilder,SwaggerDocumentOptions,SwaggerModule } from '@nestjs/swagger';
import * as session from "express-session"
import * as passport from "passport"
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  dotenv.config({ path: `${__dirname}/../../../../.env` })
  app.use(
    session({
      secret: "keyboard",
      resave: false,
      saveUninitialized: false,
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())
  const config = new DocumentBuilder()
  .setTitle('DEMO PROJECT')
  .setDescription('REST API')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const options: SwaggerDocumentOptions =  {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };
const document = SwaggerModule.createDocument(app, config,options);
SwaggerModule.setup('api', app, document);
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
