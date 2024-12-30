import { Injectable } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';

@Injectable()
export class DbConfigService {
  private dataSource: DataSource;

  constructor() {
    this.dataSource = this.createDataSource();
  }

  // 데이터베이스 설정 읽기
  private getDatabaseConfig(): DataSourceOptions {
    return {
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: ['src/**/*.entity{.ts,.js}']
    };
  }

  // 데이터 소스 생성
  private createDataSource(): DataSource {
    const config = this.getDatabaseConfig();
    return new DataSource(config);
  }

  // 데이터베이스 연결
  async connect(): Promise<void> {
    try {
      if (!this.dataSource.isInitialized) {
        await this.dataSource.initialize();
        console.log('MySQL DB connected successfully...');
      }
    } catch (error) {
      console.error('Failed to connect to the MySQL DB...', error);
      throw error;
    }
  }
}
