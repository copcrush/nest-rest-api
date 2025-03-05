import { Controller, Get } from '@nestjs/common';
import { TransactionsService } from 'src/services/transactions/transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Get()
  async getTransactions() {
    return this.transactionsService.getTransactions();
  }
}
