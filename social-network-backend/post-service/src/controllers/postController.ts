import { Request, Response } from "express";
import PostService from "../services/postService";

export class PostController {
  async createPost(req: Request, res: Response) {
    try {
      const userId = req.userId;
      const { message } = req.body;
      if (!userId) return res.status(401).json({ message: "No autorizado" });
      const post = await PostService.createPost(userId, message);
      res.status(201).json(post);
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Error al crear publicación", error: error.message });
    }
  }

  async getAllPosts(req: Request, res: Response) {
    try {
      const posts = await PostService.getAllPosts();
      res.json(posts);
    } catch (error: any) {
      res
        .status(500)
        .json({
          message: "Error al obtener publicaciones",
          error: error.message,
        });
    }
  }

  async likePost(req: Request, res: Response) {
    try {
      const userId = req.userId;
      const { postId } = req.body;
      if (!userId) return res.status(401).json({ message: "No autorizado" });
      const result = await PostService.likePost(userId, postId);
      res.json(result);
    } catch (error: any) {
      res
        .status(500)
        .json({ message: "Error al dar like", error: error.message });
    }
  }

  async getPostsByUserId(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const posts = await PostService.getPostsByUserId(id);
      res.json(posts);
    } catch (error: any) {
      res
        .status(500)
        .json({
          message: "Error al obtener publicaciones del usuario",
          error: error.message,
        });
    }
  }
}

export default new PostController();
