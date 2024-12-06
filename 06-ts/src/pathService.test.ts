import { expect, test } from 'vitest'
import { pt1, pt2 } from './pathService'

const input = [
  '....#.....',
  '.........#',
  '..........',
  '..#.......',
  '.......#..',
  '..........',
  '.#..^.....',
  '........#.',
  '#.........',
  '......#...',
]

test('Test input part 1', () => {
  expect(pt1(input)).toBe(41)
})

test('Test input part 2', () => {
   expect(pt2(input)).toBe(6)
})

