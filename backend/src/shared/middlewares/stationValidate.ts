import { body } from "express-validator";

export const stationValidate = [
  body("name")
    .isString()
    .withMessage("O nome é obrigatório.")
    .notEmpty()
    .withMessage("O nome não pode ser vazio."),
  body("logitude")
    .isNumeric()
    .withMessage("Longitude é obrigatório.")
    .notEmpty()
    .withMessage("Longitude não pode ser vazio."),
  body("latitude")
    .isNumeric()
    .withMessage("Latitude é obrigatório.")
    .notEmpty()
    .withMessage("Latitude não pode ser vazio."),
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
