import { body } from "express-validator";

export const pricesValidate = [
  body("regularGasoline")
    .isNumeric()
    .withMessage("Gasolina Comum é obrigatório.")
    .notEmpty()
    .withMessage("Gasolina Comum não pode ser vazio."),
  body("additiveGasoline")
    .isNumeric()
    .withMessage("Gasolina Aditivada é obrigatório.")
    .notEmpty()
    .withMessage("Gasolina Aditivadanão pode ser vazio."),
  body("ethanol")
    .isNumeric()
    .withMessage("Ethanol é obrigatório.")
    .notEmpty()
    .withMessage("Ethanol não pode ser vazio."),
  body("diesel")
    .isNumeric()
    .withMessage("Diesel é obrigatório.")
    .notEmpty()
    .withMessage("Diesel não pode ser vazio."),
];
