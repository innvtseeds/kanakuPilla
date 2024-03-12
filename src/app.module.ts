import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { DbService } from './db/db.service';
import { ExpenseController } from './expense/expense.controller';
import { ExpenseService } from './expense/expense.service';


@Module({
  controllers: [UserController, ExpenseController],
  providers: [UserService, DbService, ExpenseService],
  exports: [DbService]
})
export class AppModule {}
