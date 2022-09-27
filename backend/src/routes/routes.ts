import { Router } from "express";
import { userValidate } from "../middlewares/userValidate";
import { idValidate } from "../middlewares/idValidate";
import { validate } from "../middlewares/validate";
import { UserContoller } from "../modules/controllers/UserController";

const routes = Router();

routes.get("/users", new UserContoller().findAll);
routes.get("/users/:id", idValidate, validate, new UserContoller().findOne);
routes.post("/users", userValidate, validate, new UserContoller().create);
routes.put(
  "/users/:id",
  idValidate,
  userValidate,
  validate,
  new UserContoller().update
);
routes.delete("/users/:id", idValidate, validate, new UserContoller().delete);

export { routes };
