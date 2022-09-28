import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindOneUserService } from "../services/FindOneUserService";

export class FindOneUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = container.resolve(FindOneUserService);

    const user = await service.execute(id);

    res.json(user);
  }
}
