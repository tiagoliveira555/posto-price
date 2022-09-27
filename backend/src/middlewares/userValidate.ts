import { body } from "express-validator";

export const userValidate = [
  body("name")
    .isString()
    .withMessage("O nome é obrigatório.")
    .notEmpty()
    .withMessage("O nome não pode ser vazio."),
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
];
