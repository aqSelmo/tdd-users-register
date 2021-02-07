import request from 'supertest';

import connection from '../database';
import app from '../server';

describe('HTTP users', () => {
  beforeAll(async () => {
    await connection.connectToDatabase();
  });

  afterAll(async () => {
    await connection.disconnectToDatabase();
  });

  afterEach(async () => {
    await connection.truncateDatabase();
  });

  it('should list all users', async done => {
    const response = await request(app).get('/users');

    expect(response.status).toBe(200);
    done();
  });

  it('should create a new user', async done => {
    const response = await request(app).post('/users').send({
      name: 'Guilherme Falcão',
      email: 'guilusa25@gmail.com',
      login: 'aqselmo',
      birthday: '25/01/2001',
      password: 'Guilherme2501',
    });

    expect(JSON.parse(response.text)).toEqual(
      expect.objectContaining({
        id: 1,
      })
    );
    done();
  });
});
