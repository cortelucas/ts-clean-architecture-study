import { Position } from "../domain/route.entity";
import { IRouteRepository } from "../domain/route.repository";

export class ListAllRoutesUseCases {
  constructor(private routeRepo: IRouteRepository) {}

  async execute(): Promise<CreateRouteOutput> {
    const route = await this.routeRepo.findAll();
    return route.map((r) => r.toJSON());
  }
}

type CreateRouteOutput = {
  id: string;
  title: string;
  startPosition: Position;
  endPosition: Position;
  points?: Position[];
}[];
