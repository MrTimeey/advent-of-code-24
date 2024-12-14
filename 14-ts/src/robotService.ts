const regex = /=(-?\d+),(-?\d+)/

const createGrid = (length: number, width: number): string[][] => {
  const grid: string[][] = []
  for (let row = 0; row < length; row++) {
    const rowArray = []
    for (let col = 0; col < width; col++) {
      rowArray.push('.')
    }
    grid.push(rowArray)
  }
  return grid
}

const parseInput = (inputLines: string[]) => {
  return inputLines
      .map(l => {
        const [pos, vec] = l.split(' ')
        const [,posX, posY] = regex.exec(pos)!
        const [,vecX, vecY] = regex.exec(vec)!
        return {position: [+posX, +posY], vector: [+vecX, +vecY]}
      })
}

const fillGrid = (grid: string[][], robots: { position: number[]; vector: number[] }[]) => {
  const gridCopy = JSON.parse(JSON.stringify(grid))
  for (const robot of robots) {
    let x = robot.position[0];
    let y = robot.position[1];
    if (x >= grid[0].length || y >= grid.length) continue
    const element = gridCopy[y][x] ?? '.'
    if (element === '.') gridCopy[y][x] = '0'
    gridCopy[y][x] = `${+gridCopy[y][x] + 1}`
  }
  return gridCopy
};

const move = (grid: string[][], robots: { position: number[]; vector: number[] }[]) => {
  for (const robot of robots) {
    const [x, y] = robot.position
    const [vX, vY] = robot.vector
    let newX = x + vX
    let newY = y + vY
    if (newX >= grid[0].length) {
      newX = newX - grid[0].length
    }
    if (newX < 0) {
      newX = newX + grid[0].length
    }

    if (newY >= grid.length) {
      newY = newY - grid.length
    }
    if (newY < 0) {
      newY = newY + grid.length
    }
    robot.position = [newX, newY]
  }
};

const getQuadrantValues = (grid: string[][]) => {
  let q1 = 0, q2 = 0, q3= 0, q4 = 0

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const element = grid[row][col]
      if (element === '.') continue
      if (row < (grid.length / 2) - 1) {
        if (col < (grid[0].length / 2) - 1) {
          q1 += +element
        } else if (col > (grid[0].length / 2)){
          q2 += +element
        }
      } else if (row > grid.length / 2) {
        if (col < (grid[0].length / 2) - 1) {
          q3 += +element
        } else if (col > (grid[0].length / 2)){
          q4 += +element
        }
      }
    }
  }
  return [q1, q2, q3, q4]
};

export const pt1 = (inputLines: string[], gridLength: number, gridWidth: number): number => {
  const robots= parseInput(inputLines)
  const grid = createGrid(gridLength, gridWidth);
  for (let i = 1; i <= 100; i++) {
    move(grid, robots)
    console.log(`After ${i} seconds`)
    printGrid(fillGrid(grid, robots))
  }
  return getQuadrantValues(fillGrid(grid, robots))
      .reduce((acc, val) => acc * val, 1)
}

const printGrid = (grid: string[][]) => {
  for (let row = 0; row < grid.length; row++) {
    console.log(grid[row].join(' '))
  }
}

const horizontalLine = (robots: { position: number[]; vector: number[] }[]) => {
    const positions = new Set(robots.map(r => `${r.position[0]},${r.position[1]}`));

    for (const { position } of robots) {
      if (
          positions.has(`${position[0]+1},${position[1]}`) &&
          positions.has(`${position[0]+2},${position[1]}`) &&
          positions.has(`${position[0]+3},${position[1]}`) &&
          positions.has(`${position[0]+4},${position[1]}`) &&
          positions.has(`${position[0]+5},${position[1]}`) &&
          positions.has(`${position[0]+6},${position[1]}`) &&
          positions.has(`${position[0]+7},${position[1]}`) &&
          positions.has(`${position[0]+8},${position[1]}`)
      ) return true;
    }
    return false;
};
export const pt2 = (inputLines: string[], gridLength: number, gridWidth: number): number => {
  const robots= parseInput(inputLines)
  const grid = createGrid(gridLength, gridWidth);
  let seconds = 0;
  while (!horizontalLine(robots)) {
    move(grid, robots)
    seconds++
  }
  console.log(`After ${seconds} seconds`)
  printGrid(fillGrid(grid, robots))
  return seconds
}
