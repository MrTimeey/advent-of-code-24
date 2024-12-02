const increasing = (curr: number, i: number, arr: number []) => i === 0 || curr > arr[i -1]
const decreasing = (curr: number, i: number, arr: number []) => i === 0 || curr < arr[i -1]

const linear = (curr: number, i: number, arr: number []) => {
  if (i === 0) return true
  const diff = Math.abs(curr - arr[i-1])
  return diff <= 3 && diff >= 1
}

const isSafe = (level: number[]) => {
  const orderFn = level[0] > level[level.length - 1] ? decreasing : increasing
  return level.every(orderFn) && level.every(linear)
}

const permute = (arr: number[]) => {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(arr.filter((_: unknown, index: number) => index !== i));
  }
  return result
}

export const pt1 = (inputLines: string[]): number => {
  return inputLines
      .map(line => line.split(' ').map(c => +c))
      .filter(isSafe)
      .length
}

export const pt2 = (inputLines: string[]): number => {
  return inputLines
      .map(line => line.split(' ').map(c => +c))
      .filter(l => isSafe(l) || permute(l).some(isSafe))
      .length
}
