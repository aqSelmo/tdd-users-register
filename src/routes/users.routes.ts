import { Router } from 'express';
import { getRepository } from 'typeorm';
import { UserService } from '../app/services/users.service';

import { User } from '../database/entities/user.entity';

const route = Router();

interface Request {
  name: string;
  login: string;
  email: string;
  password: string;
  birthday: string;
}

route.get('/', async (request, response) => {
  const usersRepository = getRepository(User);

  const users = await usersRepository.find();

  return response.json(users);
});

route.post('/', async (request, response) => {
  const usersRepository = getRepository(User);
  const usersService = new UserService();

  const { name, login, password, email, birthday }: Request = request.body;
  const data = await usersService.execute({
    name,
    login,
    password,
    email,
    birthday,
  });

  const user = await usersRepository.save(data);

  delete user.password;

  return response.json(user);
});

export default route;
