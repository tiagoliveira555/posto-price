import { inject, injectable } from "tsyringe";
import { NotFound } from "../../../shared/errors/NotFound";
import { IUpdatePriceStation } from "../dtos/IUpdatePriceStation";
import { Station } from "../entities/Station";
import { IStationRepository } from "../repositories/IStationRepository";

@injectable()
export class UpdatePriceStationService {
  constructor(
    @inject("StationRepository")
    private stationRepository: IStationRepository
  ) {}

  async execute(
    id: string,
    { regularGasoline, additiveGasoline, ethanol, diesel }: IUpdatePriceStation
  ): Promise<Station> {
    const station = await this.stationRepository.findById(id);

    if (!station) {
      throw new NotFound("Posto não encontrado!");
    }

    station.regularGasoline = regularGasoline;
    station.additiveGasoline = additiveGasoline;
    station.ethanol = ethanol;
    station.diesel = diesel;

    await this.stationRepository.save(station);

    return station;
  }
}
