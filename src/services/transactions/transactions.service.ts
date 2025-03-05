import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionsService {
  async getTransactions() {
    return [
      { id: 1, amount: 5000, type: 'income', description: 'Salary' },
      { id: 2, amount: -2000, type: 'expense', description: 'Groceries' },
    ];
  }
}
