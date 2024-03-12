import { Injectable, Logger } from '@nestjs/common';
// Import the library you'll use for MongoDB connection (e.g., Mongoose)
const mongoose = require('mongoose'); // Replace with actual import



abstract class MongoDatabase {
  protected readonly logger = new Logger(this.constructor.name);

  abstract connect(): Promise<void>;
}



@Injectable()
export class MongoDatabaseImpl extends MongoDatabase {
  private connectionString: string;

  constructor(connectionString: string) {
    super();
    this.connectionString = connectionString;
  }

  async connect(): Promise<void> {
    try {
      await mongoose.connect(this.connectionString);
      this.logger.log('Connected to MongoDB');
    } catch (error) {
      this.logger.error('Error connecting to MongoDB', error);
      throw error;
    }
  }

  // You can add additional methods specific to MongoDB operations here (optional)
}

