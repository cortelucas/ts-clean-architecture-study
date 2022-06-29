import { Route, RouteProps } from "../../domain/route.entity";
import { RouteInMemoryRepository } from "./route-inmemory.repository";

describe("RouteInMemoryRepository Test", () => {
  it("Should insert a new route", async () => {
    const repository = new RouteInMemoryRepository();
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 0 },
      endPosition: { lat: 0, lng: 0 },
    };
    const route = new Route(routeProps);

    await repository.insert(route);
    console.log(repository.items);

    expect(repository.items).toHaveLength(1);
    expect(repository.items).toStrictEqual([route]);
  });
});
