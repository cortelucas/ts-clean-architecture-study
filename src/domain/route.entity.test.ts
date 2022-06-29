import { Position, Route, RouteProps } from "./route.entity";

describe("Route Tests", () => {
  test("Constructor", () => {
    let routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 0 },
      endPosition: { lat: 0, lng: 0 },
    };

    let route = new Route(routeProps);

    expect(route.id).toBeDefined();
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [],
    });

    routeProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 0 },
      endPosition: { lat: 0, lng: 0 },
      points: [{ lat: 0, lng: 0 }],
    };

    route = new Route(routeProps);
    expect(route.props).toStrictEqual({
      ...routeProps,
      points: [{ lat: 0, lng: 0 }],
    });
  });

  test("updateTitle method", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 0 },
      endPosition: { lat: 0, lng: 0 },
    };

    const route = new Route(routeProps);
    route.updateTitle("title updated");

    expect(route.title).toBe("title updated");
  });

  test("updatePosition method", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 0 },
      endPosition: { lat: 0, lng: 0 },
    };

    const route = new Route(routeProps);
    const startPosition: Position = {
      lat: 10,
      lng: 20,
    };
    const endPosition: Position = {
      lat: 30,
      lng: 40,
    };
    route.updatePosition(startPosition, endPosition);

    expect(route.startPosition).toBe(startPosition);
    expect(route.endPosition).toBe(endPosition);
  });

  test("updatePoints method", () => {
    const routeProps: RouteProps = {
      title: "minha rota",
      startPosition: { lat: 0, lng: 0 },
      endPosition: { lat: 0, lng: 0 },
    };

    const route = new Route(routeProps);
    const points: Position[] = [
      {
        lat: 10,
        lng: 20,
      },
    ];
    route.updatePoints(points);

    expect(route.points).toHaveLength(1);
    expect(route.points).toStrictEqual(points);
  });
});
