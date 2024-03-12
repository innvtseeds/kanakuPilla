import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DbService } from './db/db.service';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  const mongoService = app.get(DbService);
  await mongoService.connect();

  await app.listen(process.env.PORT || 8000);

}
bootstrap();
