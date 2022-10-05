import { Router } from "express";

import { CreateUserController } from "../../modules/users/controllers/CreateUserController";
import { DeleteUserController } from "../../modules/users/controllers/DeleteUserController";
import { FindOneUserController } from "../../modules/users/controllers/FindOneUserController";
import { ListAllUserContoller } from "../../modules/users/controllers/ListAllUserController";
import { LoginUserController } from "../../modules/users/controllers/LoginUserController";
import { UpdateUserContoller } from "../../modules/users/controllers/UpdateUserController";

import { isAuthenticated } from "../middlewares/isAuthenticated";
import { idValidate } from "../middlewares/idValidate";
import { loginValidate } from "../middlewares/loginValidate";
import { userValidate } from "../middlewares/userValidate";

const userRoutes = Router();

userRoutes.post("/login", loginValidate, new LoginUserController().handle);

userRoutes.post("/", userValidate, new CreateUserController().handle);

userRoutes.use(isAuthenticated);

userRoutes.get("/", new ListAllUserContoller().handle);

userRoutes.get("/:id", idValidate, new FindOneUserController().handle);

userRoutes.put(
  "/:id",
  idValidate,
  userValidate,
  new UpdateUserContoller().handle
);

userRoutes.delete("/:id", idValidate, new DeleteUserController().handle);

export { userRoutes };
