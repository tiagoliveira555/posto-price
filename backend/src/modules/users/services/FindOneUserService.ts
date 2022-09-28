import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../repositories/IUserRepository";
import { userToDto } from "../helpers/userToDto";
import { NotFound } from "../../../shared/errors/NotFound";
import { IUserResponse } from "../interfaces/IUserResponse";

@injectable()
export class FindOneUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(id: string): Promise<IUserResponse> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFound("Usuário não encontrado");
    }

    return userToDto(user);
  }
}
