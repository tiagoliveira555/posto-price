import { CreateUserDto } from "../dtos/request/CreateUserDto";
import { User } from "../entities/User";

export interface IUserRepository {
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByUserName(username: string): Promise<User | null>;
  create(createUserDto: CreateUserDto): Promise<User>;
  update(id: string, user: User): Promise<User>;
  remove(id: string): Promise<void>;
}
