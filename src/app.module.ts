import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DatabaseModule } from './common/database/database.module';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { TransactionsModule } from './modules/transactions/transactions.module';

@Module({
  imports: [ConfigModule.forRoot(),
    DatabaseModule,
    UsersModule,
    TransactionsModule,
    AuthModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

