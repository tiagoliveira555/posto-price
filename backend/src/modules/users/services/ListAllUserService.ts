import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../repositories/IUserRepository";
import { userToUserDto } from "../helpers/userToUserDto";
import { IUserDto } from "../dtos/IUserDto";

@injectable()
export class ListAllUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(): Promise<IUserDto[]> {
    const users = await this.userRepository.findAll();

    const userDto = users.map((user) => userToUserDto(user));

    return userDto;
  }
}
