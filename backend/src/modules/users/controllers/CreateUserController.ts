import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateUserDto } from "../dtos/ICreateUserDto";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const service = container.resolve(CreateUserService);

    const createUserDto = req.body as ICreateUserDto;

    const user = await service.execute(createUserDto);

    return res.status(201).json(user);
  }
}
