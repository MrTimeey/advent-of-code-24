const increasing = (curr: number, i: number, arr: number []) => i === 0 || (curr > arr[i -1])
const decreasing = (curr: number, i: number, arr: number []) => i === 0 || (curr < arr[i -1])
const linear = (curr: number, i: number, arr: number []) => {
  if (i === 0) return true
  const diff = Math.max(curr, arr[i-1]) - Math.min(curr, arr[i-1])
  return diff <= 3 && diff >= 1
}

const isSafe = (level: number[]) => {
  const checkFn = level[0] > level[level.length -1] ? decreasing : increasing
  return level.every(checkFn) && level.every(linear)
}

export const pt1 = (inputLines: string[]): number => {
  return inputLines
      .map(line => line.split(' ').map(c => +c))
      .filter(isSafe)
      .length
}

export const pt2 = (inputLines: string[]): number => {
  const levels = inputLines.map(line => line.split(' ').map(c => +c))
  let safeLevels = 0
  for (const level of levels) {
    if (isSafe(level)) {
      safeLevels++
    } else {
      for (let i = 0; i < level.length; i++) {
        let strippedArray = level.filter((_, index) => index !== i);
        if (isSafe(strippedArray)) {
          safeLevels++
          break
        }
      }
    }
  }
  return safeLevels
}
