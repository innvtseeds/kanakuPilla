import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common';

@Injectable() // Remove the abstract: true option
export abstract class Database {
  protected readonly logger = new Logger(this.constructor.name);

  abstract connect(): Promise<void>;
}
