import { Request, Response } from "express";
import { container } from "tsyringe";
import { UserService } from "../services/UserService";

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = container.resolve(UserService);

    await service.delete(id);

    return res.status(204).send();
  }
}
