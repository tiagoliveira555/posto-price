import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteStationService } from "../services/DeleteStationService";

export class DeleteStationController {
  async handle(req: Request, res: Response) {
    const id = req.params.id;

    const service = container.resolve(DeleteStationService);

    await service.execute(id);

    return res.status(204).send();
  }
}
