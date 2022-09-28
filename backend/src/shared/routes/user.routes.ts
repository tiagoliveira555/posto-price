import { Router } from "express";

import { CreateUserController } from "../../modules/users/controllers/CreateUserController";
import { DeleteUserController } from "../../modules/users/controllers/DeleteUserController";
import { FindOneUserController } from "../../modules/users/controllers/FindOneUserController";
import { ListAllUserContoller } from "../../modules/users/controllers/ListAllUserController";
import { LoginUserController } from "../../modules/users/controllers/LoginUserController";
import { UpdateUserContoller } from "../../modules/users/controllers/UpdateUserController";

import { idValidate } from "../middlewares/idValidate";
import { loginValidate } from "../middlewares/loginValidate";
import { userValidate } from "../middlewares/userValidate";
import { validate } from "../middlewares/validate";

const userRoutes = Router();

userRoutes.post(
  "/login",
  loginValidate,
  validate,
  new LoginUserController().handle
);

userRoutes.get("/", new ListAllUserContoller().handle);

userRoutes.get(
  "/:id",
  idValidate,
  validate,
  new FindOneUserController().handle
);

userRoutes.post("/", userValidate, validate, new CreateUserController().handle);

userRoutes.put(
  "/:id",
  idValidate,
  userValidate,
  validate,
  new UpdateUserContoller().handle
);

userRoutes.delete(
  "/:id",
  idValidate,
  validate,
  new DeleteUserController().handle
);

export { userRoutes };
