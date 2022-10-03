import { Router } from "express";
import { CreateStationController } from "../../modules/stations/controllers/CreateStationController";
import { DeleteStationController } from "../../modules/stations/controllers/DeleteStationController";
import { FindOneStationController } from "../../modules/stations/controllers/FindOneStationController";
import { ListAllStationController } from "../../modules/stations/controllers/ListAllStationController";
import { UpdatePriceStationController } from "../../modules/stations/controllers/UpdatePriceStationController";
import { UpdateStationController } from "../../modules/stations/controllers/UpdateStationController";
import { idValidate } from "../middlewares/idValidate";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { pricesValidate } from "../middlewares/pricesValidate";
import { stationValidate } from "../middlewares/stationValidate";
import { validate } from "../middlewares/validate";

const stationRoutes = Router();

stationRoutes.use(isAuthenticated);

stationRoutes.post(
  "/",
  stationValidate,
  validate,
  new CreateStationController().handle
);

stationRoutes.get("/", new ListAllStationController().handle);

stationRoutes.get(
  "/:id",
  idValidate,
  validate,
  new FindOneStationController().handle
);

stationRoutes.put(
  "/:id",
  idValidate,
  stationValidate,
  validate,
  new UpdateStationController().handle
);

stationRoutes.patch(
  "/:id",
  idValidate,
  pricesValidate,
  validate,
  new UpdatePriceStationController().handle
);

stationRoutes.delete(
  "/:id",
  idValidate,
  validate,
  new DeleteStationController().handle
);

export { stationRoutes };
