import { param } from "express-validator";

export const idValidate = [param("id").isUUID().withMessage("Id inválido!")];
