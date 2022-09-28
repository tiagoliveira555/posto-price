import { AppDataSource } from "../../../../data-source";
import { ICreateUserDto } from "../../dtos/ICreateUserDto";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class UserRepositoryTypeOrm implements IUserRepository {
  private repository = AppDataSource.getRepository(User);

  async save(user: User): Promise<void> {
    await this.repository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<User | null> {
    return await this.repository.findOneBy({ id });
  }

  async findByUserName(username: string): Promise<User | null> {
    return await this.repository.findOneBy({ username });
  }

  async create(createUserDto: ICreateUserDto): Promise<User> {
    const user = this.repository.create(createUserDto);

    await this.repository.save(user);

    return user;
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}
