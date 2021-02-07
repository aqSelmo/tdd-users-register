import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import { UserRepository } from '../app/models/users.model';
import { UserService } from '../app/services/users.service';

const route = Router();

interface Request {
  name: string;
  login: string;
  email: string;
  password: string;
  birthday: string;
}

route.get('/', async (request, response) => {
  const usersRepository = getCustomRepository(UserRepository);

  const users = await usersRepository.find();

  return response.json(users);
});

route.post('/', async (request, response) => {
  const usersRepository = getCustomRepository(UserRepository);

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
