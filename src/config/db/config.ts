import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface DatabaseConfig {
  type: 'mongo' | 'postgres' | string; // Add more database types as needed
  connectionString: string;
}


@Injectable()
export class DatabaseConfigService {
  constructor(private readonly configService: ConfigService) {}

  get config(): DatabaseConfig {
    return this.configService.get<DatabaseConfig>('database');
  }
}
