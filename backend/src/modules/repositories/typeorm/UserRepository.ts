import { AppDataSource } from "../../../data-source";
import { CreateUserDto } from "../../dtos/request/CreateUserDto";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class UserRepository implements IUserRepository {
  private repository = AppDataSource.getRepository(User);

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<User | null> {
    return await this.repository.findOneBy({ id });
  }

  async findByUserName(username: string): Promise<User | null> {
    return await this.repository.findOneBy({ username });
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.repository.create(createUserDto);

    await this.repository.save(user);

    return user;
  }

  async update(id: string, user: User): Promise<User> {
    const updateUser = this.repository.update({ id }, user);

    return user;
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}
