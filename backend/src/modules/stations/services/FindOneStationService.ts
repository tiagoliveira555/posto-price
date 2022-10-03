import { inject, injectable } from "tsyringe";
import { NotFound } from "../../../shared/errors/NotFound";
import { Station } from "../entities/Station";
import { IStationRepository } from "../repositories/IStationRepository";

@injectable()
export class FindOneStationService {
  constructor(
    @inject("StationRepository")
    private stationRepository: IStationRepository
  ) {}

  async execute(id: string): Promise<Station> {
    const station = await this.stationRepository.findById(id);

    if (!station) {
      throw new NotFound("Posto não encontrado!");
    }

    return station;
  }
}
