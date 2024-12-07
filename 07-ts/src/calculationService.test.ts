import { expect, test } from 'vitest'
import { pt1, pt2 } from './calculationService'

const input = [
  '190: 10 19',
  '3267: 81 40 27',
  '83: 17 5',
  '156: 15 6',
  '7290: 6 8 6 15',
  '161011: 16 10 13',
  '192: 17 8 14',
  '21037: 9 7 18 13',
  '292: 11 6 16 20',
]

test('Test input part 1', () => {
  expect(pt1(input)).toBe(3749)
})

test('Test input part 2', () => {
  expect(pt2(input)).toBe(11387)
})

