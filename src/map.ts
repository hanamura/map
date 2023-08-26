/**
 * Converts a value from its representation in "from" range to "to" range. If the third argument is missing, "from" defaults to [0, 1].
 */
export const map: Map = (
  value: number,
  from: readonly [number, number],
  to?: readonly [number, number]
): number => {
  if (to === undefined) {
    to = from
    from = [0, 1]
  }

  const [fromMin, fromMax] = from
  const [toMin, toMax] = to
  const fromRange = fromMax - fromMin
  const toRange = toMax - toMin
  return ((value - fromMin) / fromRange) * toRange + toMin
}

interface Map {
  (
    value: number,
    from: readonly [number, number],
    to: readonly [number, number]
  ): number
  (value: number, to: readonly [number, number]): number
}
