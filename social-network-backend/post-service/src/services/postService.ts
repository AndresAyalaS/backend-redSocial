import pool from "../models/db";

class PostService {
  async createPost(userId: string, message: string) {
    const query = `
            INSERT INTO posts (user_id, message)
            VALUES ($1, $2)
            RETURNING id, user_id, message, created_at
        `;
    const result = await pool.query(query, [userId, message]);
    return result.rows[0];
  }

  async getAllPosts() {
    const query = `
            SELECT p.id, p.message, p.created_at, u.alias, u.first_name, u.last_name,
                (SELECT COUNT(*) FROM likes l WHERE l.post_id = p.id) AS likes
            FROM posts p
            JOIN users u ON p.user_id = u.id
            ORDER BY p.created_at DESC
        `;
    const result = await pool.query(query);
    return result.rows;
  }

  async likePost(userId: string, postId: string) {
    const query = `
            INSERT INTO likes (user_id, post_id)
            VALUES ($1, $2)
            ON CONFLICT DO NOTHING
        `;
    await pool.query(query, [userId, postId]);
    return { message: "Like registrado" };
  }

  async getPostsByUserId(userId: string) {
    const query = `
        SELECT p.id, p.message, p.created_at, u.alias, u.first_name, u.last_name,
            (SELECT COUNT(*) FROM likes l WHERE l.post_id = p.id) AS likes
        FROM posts p
        JOIN users u ON p.user_id = u.id
        WHERE p.user_id = $1
        ORDER BY p.created_at DESC
    `;
    const result = await pool.query(query, [userId]);
    return result.rows;
  }
}

export default new PostService();
