import request from 'supertest';
import app from '../src/index';
import pool from '../src/models/db';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';

const mockUser = {
  id: uuidv4(),
  email: 'test@example.com',
};

const token = jwt.sign({ id: mockUser.id }, process.env.JWT_SECRET || 'your_secret_key');

let createdPostId: string;

beforeAll(async () => {
  await pool.query(
    `INSERT INTO users (id, email, password, first_name, last_name, alias, birth_date)
     VALUES ($1, $2, 'hashedpass', 'Test', 'User', 'testuser', '1990-01-01')
     ON CONFLICT (id) DO NOTHING`,
    [mockUser.id, mockUser.email]
  );
});

afterAll(async () => {
  await pool.query('DELETE FROM posts WHERE user_id = $1', [mockUser.id]);
  await pool.query('DELETE FROM users WHERE id = $1', [mockUser.id]);
  await pool.end();
});

describe('Post Endpoints', () => {
  it('crear un nuevo post', async () => {
    const res = await request(app)
      .post('/api/posts')
      .set('Authorization', `Bearer ${token}`)
      .send({ message: 'Post de prueba' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.message).toBe('Post de prueba');

    createdPostId = res.body.id; 
  });

  it('obtener todos los posts', async () => {
    const res = await request(app)
      .get('/api/posts')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('dar like a un post', async () => {
    const res = await request(app)
      .post('/api/posts/like')
      .set('Authorization', `Bearer ${token}`)
      .send({ postId: createdPostId });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Like registrado' });
  });

  it('obtener posts por usuario', async () => {
    const res = await request(app)
      .get(`/api/posts/user/${mockUser.id}`)
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('no debería permitir crear post sin token', async () => {
    const res = await request(app)
      .post('/api/posts')
      .send({ message: 'Sin token' });

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty('message', 'No token provided');
  });
});
