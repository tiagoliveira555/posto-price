import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateStationService } from "../services/CreateStationService";
import { ListAllStationService } from "../services/ListAllStationService";

export class ListAllStationController {
  async handle(req: Request, res: Response) {
    const service = container.resolve(ListAllStationService);

    const stations = await service.execute();

    return res.json(stations);
  }
}
