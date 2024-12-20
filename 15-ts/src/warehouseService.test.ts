import { expect, test } from 'vitest'
import { pt1, pt2 } from './warehouseService'


test('Test input part 1', () => {
  const gridInput = [
    '########',
    '#..O.O.#',
    '##@.O..#',
    '#...O..#',
    '#.#.O..#',
    '#...O..#',
    '#......#',
    '########',
  ]
  const movements = '<^^>>>vv<v>>v<<'

  expect(pt1(gridInput, movements)).toBe(2028)
})

test('Test input part 2', async () => {
  const gridInput = [
      '##########',
      '#..O..O.O#',
      '#......O.#',
      '#.OO..O.O#',
      '#..O@..O.#',
      '#O#..O...#',
      '#O..O..O.#',
      '#.OO.O.OO#',
      '#....O...#',
      '##########',
  ]
  const movements = [
      '<vv>^<v^>v>^vv^v>v<>v^v<v<^vv<<<^><<><>>v<vvv<>^v^>^<<<><<v<<<v^vv^v>^',
      'vvv<<^>^v^^><<>>><>^<<><^vv^^<>vvv<>><^^v>^>vv<>v<<<<v<^v>^<^^>>>^<v<v',
      '><>vv>v^v^<>><>>>><^^>vv>v<^^^>>v^v^<^^>v^^>v^<^v>v<>>v^v^<v>v^^<^^vv<',
      '<<v<^>>^^^^>>>v^<>vvv^><v<<<>^^^vv^<vvv>^>v<^^^^v<>^>vvvv><>>v^<<^^^^^',
      '^><^><>>><>^^<<^^v>>><^<v>^<vv>>v>>>^v><>^v><<<<v>>v<v<v>vvv>^<><<>^><',
      '^>><>^v<><^vvv<^^<><v<<<<<><^v<<<><<<^^<v<^^^><^>>^<v^><<<^>>^v<v^v<v^',
      '>^>>^v>vv>^<<^v<>><<><<v<<v><>v<^vv<<<>^^v^>^^>>><<^v>>v^v><^^>>^<>vv^',
      '<><^^>^^^<><vvvvv^v<v<<>^v<v>v<<^><<><<><<<^^<<<^<<>><<><^^^>^^<>^>v<>',
      '^^>vv<^v^v<vv>^<><v<^v>^^^>>>^^vvv^>vvv<>>>^<^>>>>>^<<^v>^vvv<>^<><<v>',
      'v^^>>><<^^<>>^v^<v^vv<>v^<<>^<^v^v><^<<<><<^<v><v<>vv>>v><v^<vv<>v^<<^'
      ].join('')
  expect(pt2(gridInput, movements)).toBe(9021)
})

test('Test edge part 2', async () => {
  const gridInput = [
      '#######',
      '#...#.#',
      '#.....#',
      '#.....#',
      '#.....#',
      '#.....#',
      '#.OOO@#',
      '#.OOO.#',
      '#..O..#',
      '#.....#',
      '#.....#',
      '#######'
  ]
  const movements = 'v<vv<<^^^^^'
  expect(pt2(gridInput, movements)).toBe(2339)
})

test('Test other edge part 2', () => {
  const gridInput = [
      '######',
      '#....#',
      '#.O..#',
      '#.OO@#',
      '#.O..#',
      '#....#',
      '######'
  ]
  const movements = '<v<^vv<^'
  expect(pt2(gridInput, movements)).toBe(816)
})

