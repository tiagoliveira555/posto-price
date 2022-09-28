import { inject, injectable } from "tsyringe";
import bcrypt from "bcrypt";

import { IUserRepository } from "../repositories/IUserRepository";
import { ICreateUserRequest } from "../interfaces/ICreateUserRequest";
import { userToDto } from "../helpers/userToDto";
import { BadRequest } from "../../../shared/errors/BadRequest";
import { IUserResponse } from "../interfaces/IUserResponse";

@injectable()
export class CreateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    name,
    username,
    password,
  }: ICreateUserRequest): Promise<IUserResponse> {
    const userExist = await this.userRepository.findByUserName(username);

    if (userExist) {
      throw new BadRequest("Usuário já cadastrado!");
    }

    const hashPass = await bcrypt.hash(password, 10);

    const user = await this.userRepository.create({
      name,
      username,
      password: hashPass,
    });

    return userToDto(user);
  }
}
