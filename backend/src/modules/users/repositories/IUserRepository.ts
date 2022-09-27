import { ICreateUserRequest } from "../interfaces/ICreateUserRequest";
import { User } from "../entities/User";

export interface IUserRepository {
  save(user: User): void;
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByUserName(username: string): Promise<User | null>;
  create(createUserDto: ICreateUserRequest): Promise<User>;
  remove(id: string): Promise<void>;
}
