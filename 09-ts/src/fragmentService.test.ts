import { expect, test } from 'vitest'
import { pt1, pt2 } from './fragmentService'

test('Test input part 1', () => {
  const input = '2333133121414131402'
  expect(pt1(input)).toBe(1928)
})

test('Test input part 2', () => {
  const input = [
    '',
  ]

  expect(pt2(input)).toBe(0)
})

