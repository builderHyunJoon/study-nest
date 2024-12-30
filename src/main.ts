import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DbConfigService } from './config/db-config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dbService = app.get(DbConfigService);
  await dbService.connect();
  await app.listen(3000);
}

bootstrap();
