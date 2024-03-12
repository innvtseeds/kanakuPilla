import { Injectable } from '@nestjs/common';
import { Database } from '../../infra/database';
import { MongoDatabaseImpl } from '../../infra/database/mongo';
import { PostgresDatabaseImpl } from '../../infra/database/postgres';
import { DatabaseConfig, DatabaseConfigService } from './config';

@Injectable()
export class MainDatabase {
  private readonly database: Database;

  constructor(
    private readonly databaseConfigService: DatabaseConfigService,
  ) {
    const config = this.databaseConfigService.config;
    switch (config.type) {
      case 'mongo':
        this.database = new MongoDatabaseImpl(config.connectionString);
        break;
      case 'postgres':
        this.database = new PostgresDatabaseImpl(config.connectionString);
        break;
      default:
        throw new Error(`Unsupported database type: ${config.type}`);
    }
  }

  async connect(): Promise<void> {
    await this.database.connect();
  }

  // You can expose additional methods specific to the connected database here
}
