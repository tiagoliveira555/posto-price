import { inject, injectable } from "tsyringe";
import bcrypt from "bcrypt";

import { IUserRepository } from "../repositories/IUserRepository";

import { ICreateUserDto } from "../dtos/ICreateUserDto";
import { IUserDto } from "../dtos/IUserDto";
import { userToUserDto } from "../helpers/userToUserDto";
import { BadRequest } from "../../../shared/errors/BadRequest";

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
  }: ICreateUserDto): Promise<IUserDto> {
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

    return userToUserDto(user);
  }
}
