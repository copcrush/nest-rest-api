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
  tableName: 'auth_sessions',
  timestamps: true,
  underscored: true,
})
export class AuthSession extends Model<AuthSession> {
  @Column({
    type: DataType.INTEGER,
    defaultValue: DataType.INTEGER,
    primaryKey: true,
  })
  id!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: string;

  @BelongsTo(() => User)
  user!: User;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  refreshToken!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  expiresAt!: Date;
}
