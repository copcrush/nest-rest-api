import { Module } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { UsersController } from 'src/controllers/users/users.controller';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
