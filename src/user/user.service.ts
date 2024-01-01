import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

type User = {
    UserID: string;
    Name: string
}
@Injectable()
export class UserService {
  constructor(private readonly mongoService: DbService) {}

  async GetUsers(): Promise<User[]> {
    const client = this.mongoService.getClient();
    const db = client.db('KP');
    const usersCollection = db.collection('User');

    const users = await usersCollection.find({}).toArray();

    const user: User[] = users.map((u) => {
      return {
        UserID: u._id.toString(),
        Name: u.name,
      };
    });

    return user;
  }

  async CreateUser(name: string): Promise<boolean> {
    const client = this.mongoService.getClient();
    const db = client.db('KP');
    const usersCollection = db.collection('User');

    await usersCollection.insertOne({name});

    return true;
  }
}
