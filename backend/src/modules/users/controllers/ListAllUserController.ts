import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllUserService } from "../services/ListAllUserService";

export class ListAllUserContoller {
  async handle(req: Request, res: Response) {
    const service = container.resolve(ListAllUserService);

    const users = await service.execute();

    return res.json(users);
  }
}
