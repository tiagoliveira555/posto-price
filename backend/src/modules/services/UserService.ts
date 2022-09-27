import { inject, injectable } from "tsyringe";
import bcrypt from "bcrypt";
import { IUserRepository } from "../repositories/IUserRepository";
import { CreateUserDto } from "../dtos/request/CreateUserDto";
import { UserDto } from "../dtos/response/UserDto";
import { userToDto } from "../../helpers/userToDto";
import { NotFound } from "../../errors/NotFound";
import { BadRequest } from "../../errors/BadRequest";
import { UpdateUserDto } from "../dtos/request/UpdateUserDto";

@injectable()
export class UserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async findAll(): Promise<UserDto[]> {
    const users = await this.userRepository.findAll();

    const userDto = users.map((user) => userToDto(user));

    return userDto;
  }

  async findOne(id: string): Promise<UserDto> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFound("Usuário não encontrado");
    }

    return userToDto(user);
  }

  async create({ name, username, password }: CreateUserDto): Promise<UserDto> {
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
    { name, username, password }: UpdateUserDto
  ): Promise<UserDto> {
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

  async delete(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new NotFound("Usuário não encontrado");
    }

    await this.userRepository.remove(id);
  }
}
