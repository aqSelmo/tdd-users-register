import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  birthday: string;

  @Column({ unique: true })
  email: string;

  @Column({ unique: true })
  login: string;

  @Column()
  password?: string;
}
