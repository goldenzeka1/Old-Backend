import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { appModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MyCustomFilter2 } from './auth/filters2';

async function bootstrap() {
  const app = await NestFactory.create(appModule);
  const config = new DocumentBuilder()
    .setTitle('signup docs')
    .setDescription('the signup info')
    .setVersion('1.0')
    .addTag('signup')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (_errors) => {
      console.log('ValidationPipe is called'); ``
    },
  }));
  // app.useGlobalFilters(new MyCustomFilter2())
  await app.listen(3000);
}
bootstrap();
