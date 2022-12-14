import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { Unauthorized } from "../errors/Unauthorized";

type JwtPayload = {
  iat: number;
  exp: number;
  sub: string;
};

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Unauthorized("Token é requerido");
  }

  const [Bearer, token] = authHeader.split(" ");

  if (Bearer !== "Bearer") {
    throw new Unauthorized("Token mal formatado.");
  }

  try {
    const decodedToken = verify(token, process.env.JWT_SECRET || "");

    const { sub: id } = decodedToken as JwtPayload;

    req.user = {
      id,
    };

    next();
  } catch {
    throw new Unauthorized("Token inválido");
  }
};
