import { DocumentBuilder } from '@nestjs/swagger';

const swaggerConfig = new DocumentBuilder()
  .setTitle('HAISH TRAIN BANK')
  .setDescription('API of HAISH PRODUCT')
  .setVersion('0.1')
  .build();

export default swaggerConfig;
