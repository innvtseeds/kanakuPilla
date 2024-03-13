import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MainDatabase } from './config/db';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const mainDatabase = app.get(MainDatabase);
  await mainDatabase.connect(); // Use MainDatabase for connection

  await app.listen(process.env.PORT || 8000);
}

bootstrap();
