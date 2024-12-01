const regex = /^(\d+)\s+(\d+)$/;

export const pt1 = (inputLines) => {
  const left = []
  const right = []

  for (const line of inputLines) {
    const [,l, r] = regex.exec(line)
    left.push(l)
    right.push(r)
  }
  left.sort()
  right.sort()
  const distances = []
  for (let i = 0; i < left.length; i++) {
    let leftElement = left[i]
    let rightElement = right[i]
    const distance = leftElement > rightElement ? leftElement - rightElement : rightElement - leftElement
    distances.push(distance)
  }
  return distances.reduce((acc, val) => acc + val, 0)
}

const count = (arr, obj) => arr.filter(o => o === obj).length

export const pt2 = (inputLines) => {
  const left = []
  const right = []

  for (const line of inputLines) {
    const [,l, r] = regex.exec(line)
    left.push(l)
    right.push(r)
  }
  const similarities = []
  for (const leftElement of left) {
    similarities.push(leftElement * count(right, leftElement))
  }
  return similarities.reduce((acc, val) => acc + val, 0)
}
