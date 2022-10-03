import { Router } from "express";
import { stationRoutes } from "./station.routes";
import { userRoutes } from "./user.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/stations", stationRoutes);

export { routes };
