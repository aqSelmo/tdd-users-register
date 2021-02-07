import bcrypt from 'bcrypt';
import { User } from '../../database/entities/user.entity';

interface Request {
  name: string;
  login: string;
  email: string;
  password: string;
  birthday: string;
}

export class UserService {
  public async execute({
    name,
    login,
    password,
    birthday,
    email,
  }: Request): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);

    return { name, login, password: hash, birthday, email };
  }
}
