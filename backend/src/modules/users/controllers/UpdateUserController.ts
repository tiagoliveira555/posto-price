import { Request, Response } from "express";
import { container } from "tsyringe";
import { IUpdateUserRequest } from "../interfaces/IUpdateUserRequest";
import { UserService } from "../services/UserService";

export class UpdateUserContoller {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const updateUserDto = req.body as IUpdateUserRequest;

    const service = container.resolve(UserService);

    const user = await service.update(id, updateUserDto);

    return res.json(user);
  }
}
