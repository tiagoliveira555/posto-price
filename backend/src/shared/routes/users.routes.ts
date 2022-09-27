import { Router } from "express";

import { CreateUserController } from "../../modules/users/controllers/CreateUserController";
import { DeleteUserController } from "../../modules/users/controllers/DeleteUserController";
import { FindOneUserController } from "../../modules/users/controllers/FindOneUserController";
import { ListAllUserContoller } from "../../modules/users/controllers/ListAllUserController";
import { UpdateUserContoller } from "../../modules/users/controllers/UpdateUserController";

import { idValidate } from "../middlewares/idValidate";
import { userValidate } from "../middlewares/userValidate";
import { validate } from "../middlewares/validate";

const usersRouter = Router();

usersRouter.get("/", new ListAllUserContoller().handle);

usersRouter.get(
  "/:id",
  idValidate,
  validate,
  new FindOneUserController().handle
);

usersRouter.post(
  "/",
  userValidate,
  validate,
  new CreateUserController().handle
);

usersRouter.put(
  "/:id",
  idValidate,
  userValidate,
  validate,
  new UpdateUserContoller().handle
);

usersRouter.delete(
  "/:id",
  idValidate,
  validate,
  new DeleteUserController().handle
);

export { usersRouter };
