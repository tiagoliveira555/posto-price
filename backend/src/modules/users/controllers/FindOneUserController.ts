import { Request, Response } from "express";
import { container } from "tsyringe";
import { UserService } from "../services/UserService";

export class FindOneUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = container.resolve(UserService);

    const user = await service.findOne(id);

    res.json(user);
  }
}
