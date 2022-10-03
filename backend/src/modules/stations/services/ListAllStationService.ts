import { inject, injectable } from "tsyringe";
import { Station } from "../entities/Station";
import { IStationRepository } from "../repositories/IStationRepository";

@injectable()
export class ListAllStationService {
  constructor(
    @inject("StationRepository")
    private stationRepository: IStationRepository
  ) {}

  async execute(): Promise<Station[]> {
    const stations = await this.stationRepository.findAll();

    return stations;
  }
}
