import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers() {
    return this.usersService.getUsers();
  }
}
