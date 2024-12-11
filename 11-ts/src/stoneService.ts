const cache: Map<string, number> = new Map<string, number>();

export const pt1 = (input: string): number => {
  return input.split(/\s+/)
      .map(stone => countStones(stone, 25))
      .reduce((acc, val) => acc + val, 0)
}

export const pt2 = (input: string): number => {
  return input.split(/\s+/)
      .map(stone => countStones(stone, 75))
      .reduce((acc, val) => acc + val, 0)
}

const countStones = (stone: string, remainingBlinks: number): number => {
  const cacheKey = `${stone}|${remainingBlinks}`
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey)!
  }
  if (remainingBlinks === 0) {
    return 1;
  } else {
    let total = 0
    if (stone === '0') {
      total = countStones('1', remainingBlinks - 1)
    } else if (stone.length % 2 === 0) {
      let firstStone = stone.substring(0, stone.length / 2).replace(/^0+/, '');
      if (firstStone === '') firstStone = '0'
      let secondStone = stone.substring(stone.length / 2).replace(/^0+/, '');
      if (secondStone === '') secondStone = '0'
      return countStones(firstStone, remainingBlinks - 1) + countStones(secondStone, remainingBlinks - 1)
    } else {
      total = countStones(`${(+stone) * 2024}`, remainingBlinks - 1)
    }
    cache.set(cacheKey, total)
    return total
  }
}