import {vi} from "vitest";

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
      console.log('Found free spot', visited)
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
      console.log('Nothing to do!')
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

export const pt1 = (inputGrid: string[], movementInput: string): number => {
  const grid = inputGrid.map(line => [...line])
  const movements = [...movementInput]
  for (const movement of movements) {
    move(grid, getDirection(movement))
    console.log(`After ${movement}`)
    printGrid(grid)
  }
  return 0
}

export const pt2 = (inputGrid: string[], movements: string): number => {
  return 0
}


const printGrid = (grid: string[][]) => {
  for (let row = 0; row < grid.length; row++) {
    console.log(grid[row].join(' '))
  }
}
