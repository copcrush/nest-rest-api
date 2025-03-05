import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/models/users.model';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User) private readonly userModel: typeof User) {}

  async createUser(data: Partial<User>): Promise<User> {
    return this.userModel.create(data);
  }

  async findUserById(id: string): Promise<User | null> {
    return this.userModel.findByPk(id);
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ where: { email } });
  }

  async deleteUser(id: string): Promise<number> {
    return this.userModel.destroy({ where: { id } });
  }
}
