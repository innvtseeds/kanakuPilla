import { Injectable } from '@nestjs/common';
import { Collection } from 'mongodb';
import { IPagination, IServiceResponse } from 'src/common/Interfaces/interface';
import { DbService } from 'src/db/db.service';
import { Expense } from 'src/models/expense.model';

@Injectable()
export class ExpenseService {
  private readonly expenseEntity : Collection
  constructor(
    private readonly dbService: DbService
    ) {
      this.expenseEntity = this.dbService.accessCollection('Expense')
    }

  async getAllExpenses(pagination: IPagination) : Promise<IServiceResponse<Expense[]>>{

    let { page = 1, per_page = 10 } = pagination;
    page = parseInt(page as string)
    per_page = parseInt(per_page as string)

    const expense : Expense[] = await this.expenseEntity.find({}).project<Expense>({
      _id: 1,
      amount: 1,
      description: 1,
      date: 1,
      paidBy: 1,
    })
    .sort({date: -1})
    .skip((page - 1) * per_page)
    .limit(Number(per_page))
    .toArray();

    return {error:null, response: expense}
  }
}
