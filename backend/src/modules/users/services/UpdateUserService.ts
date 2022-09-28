import { inject, injectable } from "tsyringe";
import bcrypt from "bcrypt";

import { IUserRepository } from "../repositories/IUserRepository";
import { userToUserResponse } from "../helpers/userToUserResponse";
import { NotFound } from "../../../shared/errors/NotFound";
import { BadRequest } from "../../../shared/errors/BadRequest";
import { IUpdateUserRequest } from "../interfaces/IUpdateUserRequest";
import { IUserResponse } from "../interfaces/IUserResponse";

@injectable()
export class UpdateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(
    id: string,
    { name, username, password }: IUpdateUserRequest
  ): Promise<IUserResponse> {
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

    return userToUserResponse(user);
  }
}
