import { Request, Response } from "express";
import { container } from "tsyringe";
import { ICreateStation } from "../dtos/ICreateStation";
import { CreateStationService } from "../services/CreateStationService";

export class CreateStationController {
  async handle(req: Request, res: Response) {
    const createStation = req.body as ICreateStation;

    const service = container.resolve(CreateStationService);

    const station = await service.execute(createStation);

    return res.status(201).json(station);
  }
}
