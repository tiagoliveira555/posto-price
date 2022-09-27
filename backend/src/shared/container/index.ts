import { container } from "tsyringe";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";
import { UserRepositoryTypeOrm } from "../../modules/users/repositories/implementations/UserRepositoryTypeOrm";

container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepositoryTypeOrm
);
