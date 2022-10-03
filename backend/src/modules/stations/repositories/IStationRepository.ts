import { ICreateStation } from "../dtos/ICreateStation";
import { Station } from "../entities/Station";

export interface IStationRepository {
  save(user: Station): Promise<void>;
  findAll(): Promise<Station[]>;
  findById(id: string): Promise<Station | null>;
  create(createStation: ICreateStation): Promise<Station>;
  remove(id: string): Promise<void>;
}
