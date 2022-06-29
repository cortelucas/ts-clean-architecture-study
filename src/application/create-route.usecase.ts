import { Position, Route } from "../domain/route.entity";
import { IRouteRepository } from "../domain/route.repository";

export class CreateRouteUseCase {
  constructor(private routeRepository: IRouteRepository) {}

  async execute(input: CreateRouteInput): Promise<CreateRouteOutput> {
    const route = new Route(input);
    await this.routeRepository.insert(route);
    return route.toJSON();
  }
}

export type CreateRouteInput = {
  title: string;
  startPosition: Position;
  endPosition: Position;
  paths?: Position[];
};

export type CreateRouteOutput = {
  id: string;
  title: string;
  startPosition: Position;
  endPosition: Position;
  paths?: Position[];
};
