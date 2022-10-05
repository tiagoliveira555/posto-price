import { Router } from "express";
import { CreateStationController } from "../../modules/stations/controllers/CreateStationController";
import { DeleteStationController } from "../../modules/stations/controllers/DeleteStationController";
import { FindOneStationController } from "../../modules/stations/controllers/FindOneStationController";
import { ListAllStationController } from "../../modules/stations/controllers/ListAllStationController";
import { UpdatePriceStationController } from "../../modules/stations/controllers/UpdatePriceStationController";
import { UpdateStationController } from "../../modules/stations/controllers/UpdateStationController";

import { isAuthenticated } from "../middlewares/isAuthenticated";
import { idValidate } from "../middlewares/idValidate";
import { pricesValidate } from "../middlewares/pricesValidate";
import { stationValidate } from "../middlewares/stationValidate";

const stationRoutes = Router();

stationRoutes.use(isAuthenticated);

stationRoutes.post("/", stationValidate, new CreateStationController().handle);

stationRoutes.get("/", new ListAllStationController().handle);

stationRoutes.get("/:id", idValidate, new FindOneStationController().handle);

stationRoutes.put(
  "/:id",
  idValidate,
  stationValidate,
  new UpdateStationController().handle
);

stationRoutes.patch(
  "/:id",
  idValidate,
  pricesValidate,
  new UpdatePriceStationController().handle
);

stationRoutes.delete("/:id", idValidate, new DeleteStationController().handle);

export { stationRoutes };
