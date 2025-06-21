import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'your_secret_key';
const tokenExpiration = '1h'; // Token expiration time

export const generateToken = (userId: string) => {
    const payload = { id: userId };
    return jwt.sign(payload, secretKey, { expiresIn: tokenExpiration });
};

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        return null;
    }
};