import {Deque} from "./common/Deque";

const isSpaceBlock = (arr: string[]) => arr.every(s => s === '.')
const isFileBlock = (i: number) => i % 2 === 0

const expandInput = (input: string): string[] => {
  const numbers = [...input].map(i => +i)
  const expansion: string[] = []
  let fileIdx = 0
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i]
    for (let j = 0; j < element; j++) {
      expansion.push(isFileBlock(i) ? `${fileIdx}` : '.')
    }
    if (isFileBlock(i)) fileIdx++
  }
  return expansion;
}

export const pt1 = (input: string): number => {
  const expansion = expandInput(input);
  const deque = new Deque<string>(expansion)
  const result: number[] = []
  while (!deque.isEmpty()) {
    const elem = deque.shift();
    if (elem && elem !== '.') {
      result.push(+elem)
      continue
    }
    let newElem = deque.pop();
    while (newElem && newElem === '.') {
      newElem = deque.pop()
    }
    if (newElem) result.push(+newElem)
  }
  return result
      .map((n, i) => n * i)
      .reduce((acc, val) => acc + val, 0)
}

function getComplexInput(input: string) {
  const expandedInput = expandInput(input)
  const mappedInput = []
  let current: string[] = []
  for (const elem of expandedInput) {
    if (elem === '.') {
      if (current.some(s => s !== '.')) {
        mappedInput.push(current)
        current = []
      }
    } else {
      if (current.some(s => s !== elem)) {
        mappedInput.push(current)
        current = []
      }
    }
    current.push(elem)
  }
  mappedInput.push(current)
  return mappedInput;
}

export const pt2 = (input: string): number => {
  return 0
}
