import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbConfigService } from './config/db-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true // ConfigModule을 전역에서 사용 가능
    }),
  ],
  controllers: [AppController],
  providers: [AppService, DbConfigService],
  exports: []
})
export class AppModule {}
