const direction = {
  UP_RIGHT: [-1,1],
  UP_LEFT: [-1,-1],
  DOWN_LEFT: [1-1],
  DOWN_RIGHT: [1,1]
}

const oppositeDir = (dir) => {
  const [x,y] = dir
  return [x > 0 ? -Math.abs(x) : Math.abs(x), y > 0 ? -Math.abs(y) : Math.abs(y)]
}

export const pt1 = (inputLines) => {
  const grid = inputLines.map(l => [...l]);
  const outOfBounds = (x,y) => {
    console.log('Check bounds for ', x, y, x >= grid.length || y >= grid[0].length)
    return x < 0 || y < 0 || x >= grid.length || y >= grid[0].length
  }
  const antinodes = new Set;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const element = grid[row][col]
      if (element === '.') continue
      console.log(`Check for ${element} on x ${row}|${col}`)
      for (const dir of Object.values(direction)) {
        let otherElement = '', x = row, y = col
        while (!outOfBounds(x,y) && element !== otherElement) {
         x += dir[0]
         y += dir[1]
          if (outOfBounds(x,y)) break
         otherElement = grid?.[x]?.[y]
         if (element && element === otherElement) {
           const distance = Math.max(row, x) - Math.min(row, x)
           console.log('Found matching antenna', distance)
           const oDir = oppositeDir(dir)
           const firstAntinode = [x + dir[0] * distance, y + dir[1] * distance]
           if (inBounds(firstAntinode[0], firstAntinode[1])){
             antinodes.add(`${firstAntinode[0]}|${firstAntinode[1]}`)
           }
           const secondAntinode = [row + oDir[0] * distance, y + oDir[1] * distance]
           if (inBounds(secondAntinode[0], secondAntinode[1])){
             antinodes.add(`${secondAntinode[0]}|${secondAntinode[1]}`)
           }
         }
        }
      }
    }
  }
  return antinodes.size
}

export const pt2 = (inputLines) => {
  return 0
}
