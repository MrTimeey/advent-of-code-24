const directions = {
  '^': [-1, 0],
  'v': [1, 0],
  '<': [0, -1],
  '>': [0, 1]
}

const findStartingPoint = (grid: string[][]): number[] => {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const element = grid[row][col]
      if (element === '@') return [row, col]
    }
  }
  return [1,1]
}

const move = (grid: string[][], movement: number[]) => {
  let [x,y] = findStartingPoint(grid)
  const [dX, dY] = movement
  let nextChar = '@'
  const visited = [[x, y, nextChar]]
  while (nextChar !== '.' && nextChar !== '#') {
    x = x + dX
    y = y + dY
    nextChar = grid[x][y]
    visited.push([x,y, nextChar])
    if (nextChar === '.') {
      for (let i = 0; i < visited.length; i++) {
        const [vX, vY] = visited[i]
        if (i === 0) {
          grid[vX as number][vY as number] = visited[visited.length - 1][2] as string
        } else {
          grid[vX as number][vY as number] = visited[i - 1][2] as string
        }
      }
      break
    }
    if (nextChar === '#') {
      break
    }
  }
}

const getDirection = (input: string): number[] => {
  if (input === '^') return directions['^']
  if (input === 'v') return directions['v']
  if (input === '>') return directions['>']
  if (input === '<') return directions['<']
  return directions['^']
}

const count = (grid: string[][], searchFor = 'O') => {
  let total = 0
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const element = grid[row][col]
      if (element === searchFor) {
        total += 100 * row + col
      }
    }
  }
  return total;
};
export const pt1 = (inputGrid: string[], movementInput: string): number => {
  const grid = inputGrid.map(line => [...line])
  const movements = [...movementInput]
  for (const movement of movements) {
    move(grid, getDirection(movement))
    //console.log(`After ${movement}`)
    //printGrid(grid)
  }
  return count(grid)
}

const expandGrid = (inputGrid: string[][]) => {
  const grid = []
  for (let row = 0; row < inputGrid.length; row++) {
    let rowArray = []
    for (let col = 0; col < inputGrid[0].length; col++) {
      const element = inputGrid[row][col]
      if (element === '#') {
        rowArray.push('#', '#')
      }
      if (element === 'O') {
        rowArray.push('[',']')
      }
      if (element === '.') {
        rowArray.push('.', '.')
      }
      if (element === '@') {
        rowArray.push('@', '.')
      }
    }
    grid.push([...rowArray])
    rowArray = []
  }
  return grid
};

const expandedMove = (grid: string[][], movement: number[]) => {
  let [x,y] = findStartingPoint(grid)
  const [dX, dY] = movement
  let places: [x: number, y:number, symbol: string][] = [
      [x, y, '@']
  ]
  let currentPlaces: [x: number, y:number, symbol: string][] = [[x, y, '@']]
  bigLoop: while (true) {

    if (movement === directions['^'] || movement === directions['v']) {
      const tempPlaces: [x: number, y:number, symbol: string][] = []
      if (currentPlaces.every(([,,ch]) => ch === '.')) {
        const sortedPlaces: [x: number, y:number, symbol: string][] = places.sort((p1, p2) => movement === directions['v'] ? p2[0] - p1[0] : p1[0] - p2[0])
        for (const sortedPlace of sortedPlaces) {
          const [pX, pY, pS] = sortedPlace
          grid[pX][pY] = '.'
          if (grid[pX + dX][pY + dY] !== '#' && grid[pX + dX][pY + dY] !== '[' && grid[pX + dX][pY + dY] !== ']') {
            grid[pX + dX][pY + dY] = pS
          }
        }
        break bigLoop
      }
      if (currentPlaces.some(([,,ch]) => ch === '#')) {
        break bigLoop
      }
      for (const currentPlace of currentPlaces) {
        const [cX, cY] = currentPlace
        const newX = cX+dX
        const newY = cY+dY
        const nextChar = grid[newX][newY]
        if (nextChar === '#') {
          break bigLoop
        }
        if (nextChar === ']') {
          places.push([newX,newY - 1,'['])
          tempPlaces.push([newX,newY - 1,'['])
        }
        if (nextChar === '[') {
          places.push([newX,newY + 1,']'])
          tempPlaces.push([newX,newY + 1,']'])
        }
        if (nextChar !== '.') {
          tempPlaces.push([newX,newY,nextChar])
        }
        places.push([newX,newY,nextChar])
      }
      currentPlaces = tempPlaces
    } else {
      const newX = x+dX
      const newY = y+dY
      const nextChar = grid[newX][newY]
      if (nextChar === '#') {
        places = []
        break;
      }
      if (nextChar !== '.' && nextChar !== '#') {
        places.push([newX,newY, nextChar])
        x = newX
        y = newY
      }
      if (nextChar === '.') {
        places.push([newX,newY, nextChar])
        for (let i = 0; i < places.length; i++) {
          const [vX, vY] = places[i]
          if (i === 0) {
            grid[vX as number][vY as number] = '.'
          } else {
            grid[vX as number][vY as number] = places[i - 1][2] as string
          }
        }
        break
      }
    }
  }
}

export const pt2 = (inputGrid: string[], movementInput: string): number => {
  const grid = expandGrid(inputGrid.map(line => [...line]))
  const movements = [...movementInput]
  /*console.log('Initial')
  printGrid(grid)*/
  for (const movement of movements) {
    expandedMove(grid, getDirection(movement))
    /*console.log('After move:', movement)
    printGrid(grid)*/
  }
  return count(grid, '[')
}

const printGrid = (grid: string[][]) => {
  for (let row = 0; row < grid.length; row++) {
    console.log(grid[row].join(' '))
  }
}
