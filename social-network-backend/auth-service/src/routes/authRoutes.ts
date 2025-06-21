import { Router } from 'express';
import { AuthController } from '../controllers/authController';

const router = Router();
const authController = new AuthController();

// Rutas de autenticación
router.post('/login', authController.login);
router.post('/register', authController.register);

export default router;