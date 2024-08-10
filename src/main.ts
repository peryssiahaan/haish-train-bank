import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import swaggerConfig from './config/swagger.config';
import { ResponseInterceptor } from './framework/interceptor/response.interceptor';
import { QueryFailedFilter } from './framework/filter/queryfailederror.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new QueryFailedFilter());

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
