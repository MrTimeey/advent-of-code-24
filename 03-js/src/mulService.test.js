import { expect, test } from 'vitest'
import { pt1, pt2 } from './mulService.js'

test('Test input part 1', () => {
  const input = ['xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))']
  expect(pt1(input)).toBe(161)

})


test('Test input part 2', () => {
  const input = ['xmul(2,4)&mul[3,7]!^don\'t()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))']

  expect(pt2(input)).toBe(48)
})

