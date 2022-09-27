import { inject, injectable } from "tsyringe";
import bcrypt from "bcrypt";

import { IUserRepository } from "../repositories/IUserRepository";
import { ICreateUserRequest } from "../interfaces/ICreateUserRequest";
import { userToDto } from "../helpers/userToDto";
import { NotFound } from "../../../shared/errors/NotFound";
import { BadRequest } from "../../../shared/errors/BadRequest";
import { IUpdateUserRequest } from "../interfaces/IUpdateUserRequest";
import { IUserResponse } from "../interfaces/IUserResponse";

@injectable()
export class UserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async findAll(): Promise<IUserResponse[]> {
    const users = await this.userRepository.findAll();

    const userDto = users.map((user) => userToDto(user));

    return userDto;
  }

  async findOne(id: string): Promise<IUserResponse> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFound("Usuário não encontrado");
    }

    return userToDto(user);
  }

  async create({
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

  async update(
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

    return userToDto(user);
  }

  async delete(id: string) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFound("Usuário não encontrado");
    }

    await this.userRepository.remove(id);
  }
}
