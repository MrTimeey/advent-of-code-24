const mulRegex = /mul\((\d{1,3}),(\d{1,3})\)/g;

export const pt1 = (inputLines) => {
  let result = 0
  for (const line of inputLines) {
    for (const match of line.matchAll(mulRegex)) {
      const [,l,r] = match
      result += (+l) * (+r)
    }
  }
  return result
}

export const pt2 = (inputLines) => {
  const splitRegex = /(?=(don't\(\)|do\(\)))/
  const filteredLines = inputLines.join().split(splitRegex).filter(l => !l.startsWith('don\'t()'))
  return pt1(filteredLines)
}
