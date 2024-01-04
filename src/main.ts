import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('CUBO API')
    .setDescription('DOCS Schema error reproduction')
    .addBearerAuth()
    .setVersion('1.0')
    .build();

  const merchantDocument = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, merchantDocument);

  await app.listen(3000);
}
bootstrap();
