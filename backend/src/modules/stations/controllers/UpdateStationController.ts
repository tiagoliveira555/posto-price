import { Request, Response } from "express";
import { container } from "tsyringe";
import { IUpdateStation } from "../dtos/IUpdateStation";
import { UpdateStationService } from "../services/UpdateStationService";

export class UpdateStationController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const updateStation = req.body as IUpdateStation;

    const service = container.resolve(UpdateStationService);

    const station = await service.execute(id, updateStation);

    return res.json(station);
  }
}
