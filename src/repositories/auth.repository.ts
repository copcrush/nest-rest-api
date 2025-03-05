import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuthSession } from 'src/models/auth.model';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectModel(AuthSession) private readonly authModel: typeof AuthSession,
  ) {}

  async createSession(
    userId: string,
    refreshToken: string,
    expiresAt: Date,
  ): Promise<AuthSession> {
    return this.authModel.create({ userId, refreshToken, expiresAt });
  }

  async findSessionByToken(refreshToken: string): Promise<AuthSession | null> {
    return this.authModel.findOne({ where: { refreshToken } });
  }

  async deleteSessionByToken(refreshToken: string): Promise<number> {
    return this.authModel.destroy({ where: { refreshToken } });
  }
}
