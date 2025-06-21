import { Router } from 'express';
import UserController from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/profile', authMiddleware, UserController.getProfile);
router.get('/', authMiddleware, UserController.getAll);

export default router;