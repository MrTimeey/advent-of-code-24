import { expect, test } from 'vitest'
import { pt1, pt2 } from './pageService.js'

const rules = [
  '47|53',
  '97|13',
  '97|61',
  '97|47',
  '75|29',
  '61|13',
  '75|53',
  '29|13',
  '97|29',
  '53|29',
  '61|53',
  '97|53',
  '61|29',
  '47|13',
  '75|47',
  '97|75',
  '47|61',
  '75|61',
  '47|29',
  '75|13',
  '53|13',
]

const pages = [
  '75,47,61,53,29',
  '97,61,53,29,13',
  '75,29,13',
  '75,97,47,61,53',
  '61,13,29',
  '97,13,75,29,47'
]

test('Test input part 1', () => {
  expect(pt1(rules, pages)).toBe(143)
})

test('Test input part 2', () => {
  expect(pt2(rules, pages)).toBe(123)
})

