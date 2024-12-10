import { expect, test } from 'vitest'
import { pt1, pt2 } from './mapService'

test('Test simple input part 1', () => {
  const input = [
    '0123',
    '1234',
    '8765',
    '9876',
  ]

  expect(pt1(input)).toBe(1)
})

test('Test more heads part 1', () => {
  const input = [
    '...0...',
    '...1...',
    '...2...',
    '6543456',
    '7.....7',
    '8.....8',
    '9.....9',
  ]

  expect(pt1(input)).toBe(2)
})

test('Test even more heads part 1', () => {
  const input = [
    '..90..9',
    '...1.98',
    '...2..7',
    '6543456',
    '765.987',
    '876....',
    '987....',
  ]

  expect(pt1(input)).toBe(4)
})

test('Test part 1', () => {
  const input = [
    '89010123',
    '78121874',
    '87430965',
    '96549874',
    '45678903',
    '32019012',
    '01329801',
    '10456732',
  ]

  expect(pt1(input)).toBe(36)
})

test('Test input part 2', () => {
  const input = [
    '',
  ]

  expect(pt2(input)).toBe(0)
})

