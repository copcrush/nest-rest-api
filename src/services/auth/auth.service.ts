import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  async validatePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  generateJwt(payload: object): string {
    return this.jwtService.sign(payload);
  }

  async login(email: string, password: string): Promise<{ token: string }> {
    const user = {
      id: 1,
      email,
      password: await this.hashPassword('password'),
    };

    if (!(await this.validatePassword(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return { token: this.generateJwt({ id: user.id, email: user.email }) };
  }
}
