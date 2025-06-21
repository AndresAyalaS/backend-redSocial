import { Request, Response } from 'express';
import AuthService from '../services/authService';

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { email, password, firstName, lastName, birthDate, alias } =
        req.body;
      const user = await AuthService.register({
        email,
        password,
        firstName,
        lastName,
        birthDate,
        alias,
      });
      res.status(201).json({ user });
    } catch (error: any) {
      if (error.code === "23505") {        
        return res
          .status(400)
          .json({ message: "El email o alias ya está en uso." });
      }
      res
        .status(500)
        .json({ message: "Error al registrar usuario", error: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const { user, token } = await AuthService.login(email, password);
      res.json({ user, token });
    } catch (error: any) {
      res.status(401).json({ message: "Credenciales inválidas" });
    }
  }
}

export default new AuthController();
