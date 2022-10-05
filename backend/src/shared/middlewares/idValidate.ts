import { NextFunction, Request, Response } from "express";
import { param } from "express-validator";
import { validate } from "./validate";

export const idValidate = [
  param("id").isUUID().withMessage("Id inválido!"),
  (req: Request, res: Response, next: NextFunction) => {
    validate(req, res, next);
  },
];
