import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Transaction } from 'src/models/transactions.model';

@Injectable()
export class TransactionsRepository {
  constructor(
    @InjectModel(Transaction)
    private readonly transactionModel: typeof Transaction,
  ) {}

  async createTransaction(data: Partial<Transaction>): Promise<Transaction> {
    return this.transactionModel.create(data);
  }

  async findAllTransactions(): Promise<Transaction[]> {
    return this.transactionModel.findAll();
  }

  async findTransactionById(id: string): Promise<Transaction | null> {
    return this.transactionModel.findByPk(id);
  }

  async deleteTransaction(id: string): Promise<number> {
    return this.transactionModel.destroy({ where: { id } });
  }
}
