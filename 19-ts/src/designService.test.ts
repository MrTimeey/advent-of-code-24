import { expect, test } from 'vitest'
import { pt1, pt2 } from './designService'

const templates = 'r, wr, b, g, bwu, rb, gb, br'.split(', ')
const towels = [
  'brwrr',
  'bggr',
  'gbbr',
  'rrbgbr',
  'ubwu',
  'bwurrg',
  'brgr',
  'bbrgwb',
]

test('Test input part 1', () => {
  expect(pt1(templates, towels)).toBe(0)
})

test('Test input part 2', () => {
  expect(pt2(templates, towels)).toBe(0)
})

