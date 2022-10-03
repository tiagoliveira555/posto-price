import { container } from "tsyringe";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";
import { UserRepository } from "../../modules/users/repositories/UserRepository";
import { IStationRepository } from "../../modules/stations/repositories/IStationRepository";
import { StationRepository } from "../../modules/stations/repositories/StationRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<IStationRepository>(
  "StationRepository",
  StationRepository
);
