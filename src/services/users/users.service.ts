import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async getUsers() {
    return [{ id: 1, name: 'John Doe', email: 'john@example.com' }];
  }
}
