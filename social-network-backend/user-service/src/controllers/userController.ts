import { Request, Response } from 'express';
import UserService from '../services/userService';

export class UserController {
    async getProfile(req: Request, res: Response) {
        try {
            const userId = req.userId;
            if (!userId) return res.status(401).json({ message: 'No autorizado' });
            const user = await UserService.getUserProfile(userId);
            if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
            res.json(user);
        } catch (error: any) {
            res.status(500).json({ message: 'Error al obtener perfil', error: error.message });
        }
    }

    async getAll(req: Request, res: Response) {
        try {
            const users = await UserService.getAllUsers();
            res.json(users);
        } catch (error: any) {
            res.status(500).json({ message: 'Error al obtener usuarios', error: error.message });
        }
    }
}

export default new UserController();