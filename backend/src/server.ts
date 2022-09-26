import "express-async-errors";
import express from "express";
import { AppDataSource } from "./data-source";
import { errorMiddleware } from "./middlewares/errorMiddleware";
import { routes } from "./routes/routes";

AppDataSource.initialize().then(() => {
  const port = process.env.PORT || 3333;

  const app = express();

  app.use(express.json());

  app.use(routes);

  app.use(errorMiddleware);

  return app.listen(port, () =>
    console.log(`Server is running in port ${port}`)
  );
});
