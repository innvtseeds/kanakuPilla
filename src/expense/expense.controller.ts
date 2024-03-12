import { BadRequestException, Controller, Get, Logger, Query } from '@nestjs/common';
import { IPagination } from 'src/common/Interfaces/interface';
import { ExpenseService } from './expense.service';

@Controller('expense')
export class ExpenseController {

  private readonly logger = new Logger("DBService");
  constructor(private readonly expenseService : ExpenseService){}



  @Get('all')
  async getAllExpenses(
    @Query() pagination:IPagination
  ){


    const {error, response} = await this.expenseService.getAllExpenses(pagination);

    if(error){
      this.logger.error('ERROR IN GET ALL EXPENSES IN EXPENSE CONTROLLER :: BAD REQUEST ::', error)
      throw new BadRequestException(error, error.message)
    }

    return response;


  }
}
