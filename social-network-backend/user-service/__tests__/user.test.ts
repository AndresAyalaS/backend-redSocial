import request from 'supertest';
import jwt from 'jsonwebtoken';
import app from '../src/index';
import pool from '../src/models/db';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key';

const mockUser = {
  id: 'b9d6a3e4-527a-4e45-b9ef-4e71f10ffabc',
  email: 'user@test.com',
  password: 'hashedpass',
  firstName: 'Test',
  lastName: 'User',
  alias: 'testuser',
  birthDate: '1995-01-01'
};

const token = jwt.sign({ id: mockUser.id }, JWT_SECRET);

beforeAll(async () => {
  await pool.query(
    `INSERT INTO users (id, email, password, first_name, last_name, alias, birth_date)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     ON CONFLICT DO NOTHING`,
    [mockUser.id, mockUser.email, mockUser.password, mockUser.firstName, mockUser.lastName, mockUser.alias, mockUser.birthDate]
  );
});

afterAll(async () => {
  await pool.query('DELETE FROM users WHERE id = $1', [mockUser.id]);
  await pool.end();
});

describe('User Endpoints', () => {
  it('obtener el perfil del usuario autenticado', async () => {
    const res = await request(app)
      .get('/api/users/profile')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('id', mockUser.id);
    expect(res.body).toHaveProperty('email', mockUser.email);
  });

  it('devolver 401 si no se proporciona token', async () => {
    const res = await request(app).get('/api/users/profile');
    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty('message', 'No token provided');
  });

  it('obtener todos los usuarios', async () => {
    const res = await request(app)
      .get('/api/users')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.some((u: any) => u.id === mockUser.id)).toBe(true);
  });
});
