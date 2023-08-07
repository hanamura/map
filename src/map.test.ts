import { map } from './map'

describe('map function', () => {
  test('Converts a value from the "from" range to the "to" range. If the third argument is not provided, the "from" range defaults to [0, 1].', () => {
    expect(map(0, [0, 10])).toBe(0)
    expect(map(1, [0, 10])).toBe(10)
    expect(map(5, [0, 10])).toBe(50)
    expect(map(0.5, [0, 10])).toBe(5)
    expect(map(0, [0, 0])).toBe(0)

    expect(map(0.5, [-5, 5])).toBe(0)
    expect(map(0, [-5, 5])).toBe(-5)
    expect(map(1, [-5, 5])).toBe(5)

    expect(map(0.5, [1, 0])).toBe(0.5)
    expect(map(0, [1, 0])).toBe(1)
    expect(map(1, [1, 0])).toBe(0)

    expect(map(0, [0, 10], [0, 100])).toBe(0)
    expect(map(1, [0, 10], [0, 100])).toBe(10)
    expect(map(5, [0, 10], [0, 100])).toBe(50)
    expect(map(10, [0, 10], [0, 100])).toBe(100)
    expect(map(15, [0, 10], [0, 100])).toBe(150)

    expect(map(0.5, [-1, 1], [5, 10])).toBe(8.75)
    expect(map(0, [-1, 1], [5, 10])).toBe(7.5)
    expect(map(1, [-1, 1], [5, 10])).toBe(10)
    expect(map(-1, [-1, 1], [5, 10])).toBe(5)
  })
})
