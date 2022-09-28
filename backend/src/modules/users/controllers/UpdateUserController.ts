import { Request, Response } from "express";
import { container } from "tsyringe";
import { IUpdateUserDto } from "../dtos/IUpdateUserDto";
import { UpdateUserService } from "../services/UpdateUserService";

export class UpdateUserContoller {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const updateUserDto = req.body as IUpdateUserDto;

    const service = container.resolve(UpdateUserService);

    const user = await service.execute(id, updateUserDto);

    return res.json(user);
  }
}
