import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../repositories/IUserRepository";
import { userToDto } from "../helpers/userToDto";
import { IUserResponse } from "../interfaces/IUserResponse";

@injectable()
export class ListAllUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(): Promise<IUserResponse[]> {
    const users = await this.userRepository.findAll();

    const userDto = users.map((user) => userToDto(user));

    return userDto;
  }
}
