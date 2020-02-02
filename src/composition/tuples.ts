type Point = [number, number];

export function distanceArray(point1: Point, point2: Point): number {
  return Math.sqrt((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2);
}

class Pair<T1, T2> {
  m0: T1;
  m1: T2;

  constructor(m0: T1, m1: T2) {
    this.m0 = m0;
    this.m1 = m1;
  }
}
