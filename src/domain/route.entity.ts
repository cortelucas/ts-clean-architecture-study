import crypto from "crypto";

export type Position = {
  lat: number;
  lng: number;
};

export type RouteProps = {
  title: string;
  startPosition: Position;
  endPosition: Position;
  points?: Position[];
};

export class Route {
  public readonly id: string;
  public props: Required<RouteProps>;
  constructor(props: RouteProps, id?: string) {
    this.id = id || crypto.randomUUID();
    this.props = {
      ...props,
      points: props.points || [],
    };
  }

  updateTitle(title: string) {
    return (this.title = title);
  }

  updatePosition(startPosition: Position, endPosition: Position) {
    this.startPosition = startPosition;
    this.endPosition = endPosition;
  }

  updatePoints(points: Position[]) {
    this.points = points;
  }

  get title() {
    return this.props.title;
  }

  private set title(value: string) {
    this.props.title = value;
  }

  get startPosition() {
    return this.props.startPosition;
  }

  private set startPosition(value: Position) {
    this.props.startPosition = value;
  }

  get endPosition() {
    return this.props.endPosition;
  }

  private set endPosition(value: Position) {
    this.props.endPosition = value;
  }

  get points() {
    return this.props.points;
  }

  private set points(value: Position[]) {
    this.props.points = value;
  }

  toJSON() {
    return {
      id: this.id,
      ...this.props,
    };
  }
}
