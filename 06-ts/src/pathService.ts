const direction = {
  UP: [-1,0],
  RIGHT: [0,1],
  DOWN: [1,0],
  LEFT: [0,-1],
}


function getDirection(cell: string) {
  switch(cell) {
    case '^':
      return direction.UP
    case '>':
        return direction.RIGHT
    case 'v':
      return direction.DOWN
    case '<':
      return direction.LEFT
  }
  return direction.UP
}

const getStartingPoint = (grid: string[][]) => {
  const startingSymbols = ['^','>','v','<']
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let colIndex = 0; colIndex < grid[0].length; colIndex++) {
      const cell = grid[rowIndex][colIndex]
      if (startingSymbols.includes(cell)) {
        return {
          symbol: cell,
          pos: [rowIndex, colIndex],
          dir: getDirection(cell),
        }
      }
    }
  }
  console.error('Can not find start!')
  return {
    symbol: '>',
        pos: [0, 0],
      dir: direction.RIGHT,
  }
}

const outOfBounds = (grid: string[][], x: number, y: number) => {
  const maxRowIndex = grid.length
  const maxColIndex = grid[0].length
  return x < 0 || y < 0 || x >= maxRowIndex || y >= maxColIndex
}

const needToChangeDirection = (grid: string[][], pos: number[], dir: number[]) => {
  const [x, y] = pos
  const [xDir, yDir] = dir
  return (grid?.[x + xDir]?.[y + yDir] ?? '') === '#';
}

const rotate = (dir: number[]) => {
  const [xDir, yDir] = dir
  if (xDir === direction.UP[0] && yDir === direction.UP[1]) {
    return direction.RIGHT
  }
  if (xDir === direction.RIGHT[0] && yDir === direction.RIGHT[1]) {
    return direction.DOWN
  }
  if (xDir === direction.DOWN[0] && yDir === direction.DOWN[1]) {
    return direction.LEFT
  }
  if (xDir === direction.LEFT[0] && yDir === direction.LEFT[1]) {
    return direction.UP
  }
  console.error('Can not rotate dir!')
  return direction.UP
}

function getPositions(startingPoint: { symbol: string; pos: number[]; dir: number[] }, grid: any[][]): Set<string> | undefined {
  const positions = new Set<string>;
  const vectors = new Set<string>;

  let [x, y] = startingPoint.pos
  let [xDir, yDir] = startingPoint.dir
  while (!outOfBounds(grid, x, y)) {
    positions.add(`${x}|${y}`)

    const vector = `${x}|${y}|${xDir}|${yDir}`;
    if (vectors.has(vector)) {
      return undefined
    }
    vectors.add(vector)

    while(needToChangeDirection(grid, [x, y], [xDir, yDir])) {
      const newDir = rotate([xDir, yDir])
      xDir = newDir[0]
      yDir = newDir[1]
    }

    x += xDir
    y += yDir
  }
  return positions;
}

export const pt1 = (inputLines: string[]): number => {
  const grid = inputLines.map(l => [...l])
  const startingPoint = getStartingPoint(grid);
  return getPositions(startingPoint, grid)?.size ?? 0
}

// 1326 - too low
export const pt2 = (inputLines: string[]): number => {
  const grid = inputLines.map(l => [...l])
  const startingPoint = getStartingPoint(grid);
  let loopCounter = 0

  const basePositions = getPositions(startingPoint, grid)!
  for (const basePosition of basePositions) {
    const [rowIndex, colIndex] = basePosition.split('|')
    const loopGrid = inputLines.map(l => [...l])
    loopGrid[+rowIndex][+colIndex] = '#'
    const positions = getPositions(startingPoint, loopGrid);
    if (!positions) {
      loopCounter++
    }
  }

  /*for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const char = grid[row][col]
      if (char !== '.') {
        continue
      }

      const loopGrid = inputLines.map(l => [...l])
      loopGrid[row][col] = '#'
      let positions = getPositions(startingPoint, loopGrid);
      if (!positions) {
        loopCounter++
      }

    }
  }*/
  return loopCounter
}
