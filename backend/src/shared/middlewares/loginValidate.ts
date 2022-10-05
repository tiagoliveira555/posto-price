import { NextFunction, Request, Response } from "express";
import { body } from "express-validator";
import { validate } from "./validate";

export const loginValidate = [
  body("username")
    .isString()
    .withMessage("O username é obrigatório.")
    .notEmpty()
    .withMessage("O username não pode ser vazio."),
  body("password")
    .isString()
    .withMessage("O password é obrigatório.")
    .isLength({ min: 6 })
    .withMessage("O password precisa ter no mínimo 6 caracteres"),
  (req: Request, res: Response, next: NextFunction) => {
    validate(req, res, next);
  },
];
