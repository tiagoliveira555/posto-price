import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUserService } from "../services/DeleteUserService";

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = container.resolve(DeleteUserService);

    await service.execute(id);

    return res.status(204).send();
  }
}
