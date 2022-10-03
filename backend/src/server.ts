import "express-async-errors";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import { routes } from "./shared/routes";
import { errorMiddleware } from "./shared/middlewares/errorMiddleware";

AppDataSource.initialize().then(() => {
  const port = process.env.PORT || 3333;

  const app = express();

  app.use(cors());

  app.use(express.json());

  app.use(routes);

  app.use(errorMiddleware);

  return app.listen(port, () =>
    console.log(`Server is running in port ${port}`)
  );
});
