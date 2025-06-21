import pool from '../models/db';

class UserService {
    async getUserProfile(userId: string) {
        const query = `
            SELECT id, email, first_name AS "firstName", last_name AS "lastName", birth_date AS "birthDate", alias, created_at AS "createdAt"
            FROM users WHERE id = $1
        `;
        const result = await pool.query(query, [userId]);
        return result.rows[0];
    }

    async getAllUsers() {
        const query = `
            SELECT id, email, first_name AS "firstName", last_name AS "lastName", birth_date AS "birthDate", alias, created_at AS "createdAt"
            FROM users
        `;
        const result = await pool.query(query);
        return result.rows;
    }
}

export default new UserService();