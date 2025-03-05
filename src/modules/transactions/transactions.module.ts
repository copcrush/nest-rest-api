import { TransactionsController } from './../../controllers/transactions/transactions.controller';
import { Module } from '@nestjs/common';
import { TransactionsService } from 'src/services/transactions/transactions.service';

@Module({
  providers: [TransactionsService],
  controllers: [TransactionsController],
})
export class TransactionsModule {}
