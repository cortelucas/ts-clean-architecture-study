import { RouteInMemoryRepository } from "../infra/db/route-inmemory.repository";
import { CreateRouteUseCase } from "./create-route.usecase";

describe("CreateRouteUseCase Tests", () => {
  it("Should create a new route", async () => {
    const repository = new RouteInMemoryRepository();
    const createUseCase = new CreateRouteUseCase(repository);

    const output = await createUseCase.execute({
      title: "my title",
      startPosition: { lat: 0, lng: 0 },
      endPosition: { lat: 0, lng: 0 },
    });

    expect(repository.items).toHaveLength(1);
    expect(output).toStrictEqual({
      id: repository.items[0].id,
      title: "my title",
      startPosition: { lat: 0, lng: 0 },
      endPosition: { lat: 0, lng: 0 },
      points: [],
    });
  });
});
