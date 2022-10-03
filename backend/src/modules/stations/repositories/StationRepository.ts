import { AppDataSource } from "../../../data-source";
import { ICreateStation } from "../dtos/ICreateStation";
import { Station } from "../entities/Station";
import { IStationRepository } from "./IStationRepository";

export class StationRepository implements IStationRepository {
  private repository = AppDataSource.getRepository(Station);

  async save(station: Station): Promise<void> {
    await this.repository.save(station);
  }

  async findAll(): Promise<Station[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<Station | null> {
    return await this.repository.findOneBy({ id });
  }

  async create(createStation: ICreateStation): Promise<Station> {
    const station = this.repository.create(createStation);

    await this.repository.save(station);

    return station;
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}
