import { inject, injectable } from "tsyringe";
import { NotFound } from "../../../shared/errors/NotFound";
import { Station } from "../entities/Station";
import { IStationRepository } from "../repositories/IStationRepository";

@injectable()
export class DeleteStationService {
  constructor(
    @inject("StationRepository")
    private stationRepository: IStationRepository
  ) {}

  async execute(id: string): Promise<void> {
    const station = await this.stationRepository.findById(id);

    if (!station) {
      throw new NotFound("Posto não encontrado!");
    }

    await this.stationRepository.remove(id);
  }
}
