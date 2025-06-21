import pool from '../models/db';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';
import { User } from '../models/user';

class AuthService {
    async register(userData: Omit<User, 'id' | 'createdAt'>) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const query = `
            INSERT INTO users (email, password, first_name, last_name, birth_date, alias)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id, email, first_name, last_name, birth_date, alias, created_at
        `;
        const values = [
            userData.email,
            hashedPassword,
            userData.firstName,
            userData.lastName,
            userData.birthDate,
            userData.alias
        ];
        const result = await pool.query(query, values);
        const user = result.rows[0];

        const token = generateToken(user.id);

        return {user, token};
    }

    async login(email: string, password: string) {
        const query = `SELECT * FROM users WHERE email = $1`;
        const result = await pool.query(query, [email]);
        const user = result.rows[0];
        if (!user) {
            throw new Error('Invalid credentials');
        }
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) {
            throw new Error('Invalid credentials');
        }
        const token = generateToken(user.id);
        const { password: _, ...userData } = user;
        return { user: userData, token };
    }
}

export default new AuthService();