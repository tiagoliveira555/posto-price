import { param } from "express-validator";
import { validate } from "./validate";

export const idValidate = [
  param("id").isUUID().withMessage("Id inválido!"),
  validate,
];
