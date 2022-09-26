import { Router } from "express";
import { UserContoller } from "../modules/controllers/UserController";

const routes = Router();

routes.get("/users", new UserContoller().findAll);
routes.get("/users/:id", new UserContoller().findOne);
routes.post("/users", new UserContoller().create);
routes.put("/users/:id", new UserContoller().update);
routes.delete("/users/:id", new UserContoller().delete);

export { routes };
