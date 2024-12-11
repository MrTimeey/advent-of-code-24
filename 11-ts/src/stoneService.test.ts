import { expect, test } from 'vitest'
import { pt1, pt2 } from './stoneService'

test('Test input part 1', () => {
  const input = '125 17'
  expect(pt1(input)).toBe(55312)
})

test('Test input part 2', () => {
  const input = ''

  expect(pt2(input)).toBe(0)
})

