import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { ConfigModule } from '@nestjs/config';
import { ExpenseController } from './expense/expense.controller';
import { ExpenseService } from './expense/expense.service';
import { MainDatabase } from './config/db';
import { DatabaseConfigService } from './config/db/config';


@Module({
  controllers: [UserController, ExpenseController],
  providers: [UserService, ExpenseService, MainDatabase, DatabaseConfigService],
  imports: [ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
