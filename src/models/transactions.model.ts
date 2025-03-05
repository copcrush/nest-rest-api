import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from './users.model';

@Table({
  tableName: 'transactions',
  timestamps: true,
  underscored: true,
})
export class Transaction extends Model<Transaction> {
  @Column({
    type: DataType.INTEGER,
    defaultValue: DataType.INTEGER,
    primaryKey: true,
  })
  id!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  amount!: number;

  @Column({
    type: DataType.ENUM('income', 'expense'),
    allowNull: false,
  })
  type!: 'income' | 'expense';

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: string;

  @BelongsTo(() => User)
  user!: User;
}
