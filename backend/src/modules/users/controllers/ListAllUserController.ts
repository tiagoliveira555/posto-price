import { Request, Response } from "express";
import { container } from "tsyringe";
import { UserService } from "../services/UserService";

export class ListAllUserContoller {
  async handle(req: Request, res: Response) {
    const service = container.resolve(UserService);

    const users = await service.findAll();

    return res.json(users);
  }
}
