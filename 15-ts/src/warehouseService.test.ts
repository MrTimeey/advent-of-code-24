import { expect, test } from 'vitest'
import { pt1, pt2 } from './warehouseService'

test('Test input part 1', () => {
  const gridInput = [
    '########',
    '#..O.O.#',
    '##@.O..#',
    '#...O..#',
    '#.#.O..#',
    '#...O..#',
    '#......#',
    '########',
  ]
  const movements = '<^^>>>vv<v>>v<<'

  expect(pt1(gridInput, movements)).toBe(2028)
})

test('Test input part 2', () => {
  const input = [
    '',
  ]

  expect(pt2(input)).toBe(0)
})

