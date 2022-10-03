import { inject, injectable } from "tsyringe";
import { NotFound } from "../../../shared/errors/NotFound";
import { IUpdateStation } from "../dtos/IUpdateStation";
import { Station } from "../entities/Station";
import { IStationRepository } from "../repositories/IStationRepository";

@injectable()
export class UpdateStationService {
  constructor(
    @inject("StationRepository")
    private stationRepository: IStationRepository
  ) {}

  async execute(id: string, updateStation: IUpdateStation): Promise<Station> {
    const station = await this.stationRepository.findById(id);

    if (!station) {
      throw new NotFound("Posto não encontrado!");
    }

    station.name = updateStation.name;
    station.logitude = updateStation.logitude;
    station.latitude = updateStation.latitude;
    station.regularGasoline = updateStation.regularGasoline;
    station.additiveGasoline = updateStation.additiveGasoline;
    station.ethanol = updateStation.ethanol;
    station.diesel = updateStation.diesel;

    await this.stationRepository.save(station);

    return station;
  }
}
