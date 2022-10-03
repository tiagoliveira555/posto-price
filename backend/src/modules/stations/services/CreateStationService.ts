import { inject, injectable } from "tsyringe";
import { ICreateStation } from "../dtos/ICreateStation";
import { Station } from "../entities/Station";
import { IStationRepository } from "../repositories/IStationRepository";

@injectable()
export class CreateStationService {
  constructor(
    @inject("StationRepository")
    private stationRepository: IStationRepository
  ) {}

  async execute(createStation: ICreateStation): Promise<Station> {
    const station = await this.stationRepository.create(createStation);

    return station;
  }
}
