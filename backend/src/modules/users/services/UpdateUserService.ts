import { inject, injectable } from "tsyringe";
import bcrypt from "bcrypt";

import { IUserRepository } from "../repositories/IUserRepository";
import { userToUserDto } from "../helpers/userToUserDto";
import { NotFound } from "../../../shared/errors/NotFound";
import { BadRequest } from "../../../shared/errors/BadRequest";
import { IUpdateUserDto } from "../dtos/IUpdateUserDto";
import { IUserDto } from "../dtos/IUserDto";

@injectable()
export class UpdateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(
    id: string,
    { name, username, password }: IUpdateUserDto
  ): Promise<IUserDto> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFound("Usuário não encontrado");
    }

    const userExist = await this.userRepository.findByUserName(username);

    if (userExist && userExist.username !== user.username) {
      throw new BadRequest("Usuário já cadastrado!");
    }

    const hashPass = await bcrypt.hash(password, 10);

    user.name = name;
    user.username = username;
    user.password = hashPass;

    await this.userRepository.save(user);

    return userToUserDto(user);
  }
}
