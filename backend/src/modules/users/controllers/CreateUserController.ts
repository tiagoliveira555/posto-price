import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateUserRequest } from "../interfaces/ICreateUserRequest";
import { UserService } from "../services/UserService";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const service = container.resolve(UserService);

    const createUserDto = req.body as ICreateUserRequest;

    const user = await service.create(createUserDto);

    return res.status(201).json(user);
  }
}
