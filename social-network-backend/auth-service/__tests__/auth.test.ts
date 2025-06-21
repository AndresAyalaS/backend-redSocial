// __tests__/auth.test.ts

import request from 'supertest';
import app from '../src/index';

describe('Auth Endpoints', () => {
  const userData = {
    firstName: 'Test',
    lastName: 'User',
    email: `test${Date.now()}@example.com`,
    password: '123456',
    birthDate: '1990-01-01',
    alias: `alias${Date.now()}`
  };

  it('registrar un nuevo usuario', async () => {
    const res = await request(app).post('/api/auth/register').send(userData);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('user');
    expect(res.body).toHaveProperty('token');
  }, 10000);

  it('fallar al registrar un usuario con correo duplicado', async () => {
    const res = await request(app).post('/api/auth/register').send(userData);

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('message', 'El email o alias ya está en uso.');
  }, 10000);

  it('iniciar sesión con credenciales válidas', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: userData.email,
      password: userData.password,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('user');
    expect(res.body).toHaveProperty('token');
  }, 10000);

  it('fallar login con contraseña incorrecta', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: userData.email,
      password: 'wrong-password',
    });

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty('message', 'Credenciales inválidas');
  }, 10000);

  it('fallar login con usuario inexistente', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'nonexistent@example.com',
      password: '123456',
    });

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty('message', 'Credenciales inválidas');
  }, 10000);
});
