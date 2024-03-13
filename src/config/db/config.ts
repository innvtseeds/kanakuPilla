import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export interface DatabaseConfig {
  type: 'mongo' | 'postgres' | string; // Add more database types as needed
  connectionString: string;
}

/**
 * DB_DIALECT: WHICH TYPE OF DB TO CONNECT
 * DB_URI: THE CONNECTION URL
 */

@Injectable()
export class DatabaseConfigService {
  constructor(private readonly configService: ConfigService) {}

  get config(): DatabaseConfig {
    const dbType = this.configService.get<string>('DB_DIALECT');
    if (!dbType) {
      throw new Error('Missing environment variable: DB_DIALECT');
    }
    return {
      type: dbType,
      connectionString: this.configService.get<string>('DB_URI'),
    };
  }
  
  
}
