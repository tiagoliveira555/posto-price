import { Request, Response } from "express";
import { container } from "tsyringe";
import { IUpdatePriceStation } from "../dtos/IUpdatePriceStation";
import { UpdatePriceStationService } from "../services/UpdatePriceStationService";

export class UpdatePriceStationController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;
    const updatePriceStation = req.body as IUpdatePriceStation;

    const service = container.resolve(UpdatePriceStationService);

    const station = await service.execute(id, updatePriceStation);

    return res.json(station);
  }
}
