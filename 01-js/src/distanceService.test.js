import { expect, test } from 'vitest'
import { pt1, pt2 } from './distanceService.js'

test('Test input part 1', () => {
  const input = [
    '3   4',
    '4   3',
    '2   5',
    '1   3',
    '3   9',
    '3   3'
  ]

  expect(pt1(input)).toBe(11)
})

test('Test input part 2', () => {
  const input = [
    '3   4',
    '4   3',
    '2   5',
    '1   3',
    '3   9',
    '3   3'
  ]

  expect(pt2(input)).toBe(31)
})

