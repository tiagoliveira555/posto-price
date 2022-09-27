import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserDto } from "../dtos/request/CreateUserDto";
import { UpdateUserDto } from "../dtos/request/UpdateUserDto";
import { UserService } from "../services/UserService";

export class UserContoller {
  async findAll(req: Request, res: Response) {
    const service = container.resolve(UserService);

    const users = await service.findAll();

    return res.json(users);
  }

  async findOne(req: Request, res: Response) {
    const service = container.resolve(UserService);

    const { id } = req.params;

    const user = await service.findOne(id);

    res.json(user);
  }

  async create(req: Request, res: Response) {
    const createUserDto = req.body as CreateUserDto;

    const service = container.resolve(UserService);

    const user = await service.create(createUserDto);

    return res.status(201).json(user);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const updateUserDto = req.body as UpdateUserDto;

    const service = container.resolve(UserService);

    const user = await service.update(id, updateUserDto);

    return res.json(user);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const service = container.resolve(UserService);

    await service.delete(id);

    return res.status(204).send();
  }
}
