import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../repositories/IUserRepository";
import { userToUserDto } from "../helpers/userToUserDto";
import { NotFound } from "../../../shared/errors/NotFound";
import { IUserDto } from "../dtos/IUserDto";

@injectable()
export class FindOneUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(id: string): Promise<IUserDto> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFound("Usuário não encontrado");
    }

    return userToUserDto(user);
  }
}
