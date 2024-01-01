import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DbService } from './db/db.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const mongoService = app.get(DbService);
  await mongoService.connect();

  await app.listen(3000);
}
bootstrap();
