import { ICreateUserDto } from "../dtos/ICreateUserDto";
import { User } from "../entities/User";

export interface IUserRepository {
  save(user: User): Promise<void>;
  findAll(): Promise<User[]>;
  findById(id: string): Promise<User | null>;
  findByUserName(username: string): Promise<User | null>;
  create(createUserResquest: ICreateUserDto): Promise<User>;
  remove(id: string): Promise<void>;
}
