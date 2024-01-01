import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class DbService {
    private readonly uri: string;
    private client: MongoClient;
    constructor() {
        this.uri = 'mongodb+srv://KanakuPilla:YdvmCPXspWavzYmR@cluster0.6pfuixz.mongodb.net/';
    }
    async connect() {
        this.client = new MongoClient(this.uri);
        await this.client.connect();
        console.log('Connected to MongoDB');
    }
    getClient() {
        return this.client;
    }
    async closeConnection() {
        if (this.client) {
        await this.client.close();
        }
    }
}
