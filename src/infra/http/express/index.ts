import express, { Express, Request, Response } from "express";
import { CreateRouteUseCase } from "../../../application/create-route.usecase";
import { ListAllRoutesUseCases } from "../../../application/list-all-routes.usecase";
import { RouteInMemoryRepository } from "../../db/route-inmemory.repository";

const app: Express = express();

app.use(express.json());

const port: string | 3000 = process.env.PORT || 3000;

const routeRepo = new RouteInMemoryRepository();

app.get("/routes", async (req: Request, res: Response) => {
  const listAllUseCase = new ListAllRoutesUseCases(routeRepo);
  const output = await listAllUseCase.execute();
  res.status(200).json(output);
});

app.post("/routes", async (req: Request, res: Response) => {
  const createUseCase = new CreateRouteUseCase(routeRepo);
  const output = await createUseCase.execute(req.body);

  res.status(201).json(output);
});

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
