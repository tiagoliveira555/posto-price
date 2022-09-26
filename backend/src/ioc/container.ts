import { container } from "tsyringe";
import { UserRepository } from "../modules/repositories/typeorm/UserRepository";
import { IUserRepository } from "../modules/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
