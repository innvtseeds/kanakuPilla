import { ObjectId } from 'mongodb';
import { BaseModel } from 'src/common/Model/baseModel';

export class Expense extends BaseModel {
  id : ObjectId
  amount : number
  description : string
  date : Date
  paidBy : ObjectId

  constructor(){
    super('Expense')
  }
}

