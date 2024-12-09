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

export const pt2 = (input: string): number => {
  let expansion = expandInput(input);

  const possibleFiles = []
  let current: number[] = []
  const backlog = expansion.slice().reverse()
      .filter(s => s !== '.')
      .map(s => +s);
  for (const number of backlog) {
    if (current.length === 0 ) {
      current.push(number)
    } else if(current.some(n => n === number)) {
      current.push(number)
    } else {
      possibleFiles.push(current)
      current = []
      current.push(number)
    }
  }
  possibleFiles.push(current)


  for (const possibleFile of possibleFiles) {
    let currentStart = null;
    let currentLength = 0;
    for (let i = 0; i < expansion.length; i++) {
      if (expansion[i] === '.') {
        if (currentStart === null) {
          currentStart = i;
        }
        currentLength++;
      } else if(expansion[i] === `${possibleFile[0]}`) {
        break;
      } else {
          if (currentLength > 0 && currentStart !== null) {
            if (possibleFile.length <= currentLength) {
              expansion = expansion.map(s => s === `${possibleFile[0]}` ? '.' : s)
              expansion.splice(currentStart, possibleFile.length, ...(possibleFile.map(n => `${n}`)));
              break
            }
            currentStart = null;
            currentLength = 0;
          }
        }
      }

  }

  return expansion
      .map((n, i) => n !== '.' ? +n * i : 0)
      .reduce((acc, val) => acc + val, 0)
}
