import { expect, test } from 'vitest'
import { pt1, pt2 } from './fragmentService'

const input = '2333133121414131402'

test('Test input part 1', () => {
  expect(pt1(input)).toBe(1928)
})

test('Test input part 2', () => {
  expect(pt2(input)).toBe(2858)
})

