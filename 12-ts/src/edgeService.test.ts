import { expect, test } from 'vitest'
import { pt1, pt2 } from './edgeService'

test('Test input part 1', () => {
  const input = [
    'AAAA',
    'BBCD',
    'BBCC',
    'EEEC',
  ]

  expect(pt1(input)).toBe(140)
})

test('Five regions part 1', () => {
  const input = [
    'OOOOO',
    'OXOXO',
    'OOOOO',
    'OXOXO',
    'OOOOO',
  ]

  expect(pt1(input)).toBe(772)
})


test('Complex part 1', () => {
  const input = [
    'RRRRIICCFF',
    'RRRRIICCCF',
    'VVRRRCCFFF',
    'VVRCCCJFFF',
    'VVVVCJJCFE',
    'VVIVCCJJEE',
    'VVIIICJJEE',
    'MIIIIIJJEE',
    'MIIISIJEEE',
    'MMMISSJEEE',
  ]

  expect(pt1(input)).toBe(1930)
})

test('Test input part 2', () => {
  const input = [
    'AAAA',
    'BBCD',
    'BBCC',
    'EEEC',
  ]

  expect(pt2(input)).toBe(80)
})

test('Test E shape part 2', () => {
  const input = [
    'EEEEE',
    'EXXXX',
    'EEEEE',
    'EXXXX',
    'EEEEE',
  ]

  expect(pt2(input)).toBe(236)
})

test('Test abba shape part 2', () => {
  const input = [
    'AAAAAA',
    'AAABBA',
    'AAABBA',
    'ABBAAA',
    'ABBAAA',
    'AAAAAA',
  ]

  expect(pt2(input)).toBe(368)
})

test('Complex part 2', () => {
  const input = [
    'RRRRIICCFF',
    'RRRRIICCCF',
    'VVRRRCCFFF',
    'VVRCCCJFFF',
    'VVVVCJJCFE',
    'VVIVCCJJEE',
    'VVIIICJJEE',
    'MIIIIIJJEE',
    'MIIISIJEEE',
    'MMMISSJEEE',
  ]

  expect(pt2(input)).toBe(1206)
})


