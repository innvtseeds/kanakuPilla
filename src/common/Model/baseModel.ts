import { Collection } from "mongodb";
import { DbService } from "src/db/db.service";

export class BaseModel {
  collection: Collection;

  constructor(collectionName: string) {
    const dbService = new DbService()
    this.collection = dbService.accessCollection(collectionName)
  }
}