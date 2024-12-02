import { expect, test } from 'vitest'
import { pt1, pt2 } from './numberService'

test('Test input part 1', () => {
  const input = [
    '7 6 4 2 1',
    '1 2 7 8 9',
    '9 7 6 2 1',
    '1 3 2 4 5',
    '8 6 4 4 1',
    '1 3 6 7 9'
  ]

  expect(pt1(input)).toBe(2)
})

test('Test input part 2', () => {
  const input = [
    '7 6 4 2 1',
    '1 2 7 8 9',
    '9 7 6 2 1',
    '1 3 2 4 5',
    '8 6 4 4 1',
    '1 3 6 7 9'
  ]

  expect(pt2(input)).toBe(4)
})

