import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindOneStationService } from "../services/FindOneStationService";

export class FindOneStationController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const service = container.resolve(FindOneStationService);

    const station = await service.execute(id);

    return res.json(station);
  }
}
