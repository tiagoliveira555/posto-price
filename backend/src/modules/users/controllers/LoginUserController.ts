import { Request, Response } from "express";
import { container } from "tsyringe";
import { ILoginDto } from "../dtos/ILoginDto";
import { LoginUserService } from "../services/LoginUserService";

export class LoginUserController {
  async handle(req: Request, res: Response) {
    const loginDto = req.body as ILoginDto;

    const service = container.resolve(LoginUserService);

    const userToken = await service.execute(loginDto);

    return res.json(userToken);
  }
}
