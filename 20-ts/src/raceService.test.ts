import { expect, test } from 'vitest'
import { pt1, pt2 } from './raceService'

test('Test input part 1', () => {
  const input = [
    '###############',
    '#...#...#.....#',
    '#.#.#.#.#.###.#',
    '#S#...#.#.#...#',
    '#######.#.#.###',
    '#######.#.#...#',
    '#######.#.###.#',
    '###..E#...#...#',
    '###.#######.###',
    '#...###...#...#',
    '#.#####.#.###.#',
    '#.#...#.#.#...#',
    '#.#.#.#.#.#.###',
    '#...#...#...###',
    '###############',
  ]

  expect(pt1(input, 2)).toBe(44)
  expect(pt1(input, 4)).toBe(30)
  expect(pt1(input, 6)).toBe(16)
  expect(pt1(input, 8)).toBe(14)
  expect(pt1(input, 10)).toBe(10)
  expect(pt1(input, 12)).toBe(8)
  expect(pt1(input, 20)).toBe(5)
  expect(pt1(input, 36)).toBe(4)
  expect(pt1(input, 38)).toBe(3)
  expect(pt1(input, 40)).toBe(2)
  expect(pt1(input, 64)).toBe(1)
})

test('Test input part 2', () => {
  const input = [
    '',
  ]

  expect(pt2(input)).toBe(0)
})

