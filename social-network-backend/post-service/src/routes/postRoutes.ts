import { Router } from 'express';
import PostController from '../controllers/postController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', authMiddleware, PostController.getAllPosts);
router.post('/', authMiddleware, PostController.createPost);
router.post('/like', authMiddleware, PostController.likePost);
router.get('/user/:id', authMiddleware, PostController.getPostsByUserId);


export default router;