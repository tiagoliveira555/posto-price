import { inject, injectable } from "tsyringe";
import bcript from "bcrypt";
import { sign } from "jsonwebtoken";

import { IUserRepository } from "../repositories/IUserRepository";

import { ILoginDto } from "../dtos/ILoginDto";
import { IUserTokenDto } from "../dtos/IUserTokenDto";
import { Unauthorized } from "../../../shared/errors/Unauthorized";

@injectable()
export class LoginUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ username, password }: ILoginDto): Promise<IUserTokenDto> {
    const user = await this.userRepository.findByUserName(username);

    if (!user) {
      throw new Unauthorized("Usuário ou senha icorretos.");
    }

    const verifyPass = await bcript.compare(password, user.password);

    if (!verifyPass) {
      throw new Unauthorized("Usuário ou senha icorretos.");
    }

    const token = sign({}, process.env.JWT_SECRET || "", {
      subject: user.id,
      expiresIn: process.env.JWT_EXPIRE,
    });

    const userToken: IUserTokenDto = {
      user: {
        id: user.id,
        name: user.name,
        username,
      },
      token,
    };

    return userToken;
  }
}
