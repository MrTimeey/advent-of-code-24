type Coord = {x: number, y: number}

function getBlocks(coordinates: Coord[]) {
  const cellSet = new Set(coordinates.map(({x, y}) => `${x},${y}`));
  const groups: Coord[][] = []
  const coordsChecked = new Set
  for (const coord of coordinates) {
    if (coordsChecked.has(`${coord.x},${coord.y}`)) {
      continue
    }
    const stack = [coord]
    let group: Set<string> = new Set
    while (stack.length > 0) {
      const c = stack.pop()
      if (!c) continue
      const {x, y} = c
      coordsChecked.add(`${x},${y}`)

      if (!group.has(`${x},${y}`)) {
        group.add(`${x},${y}`)
      }
      const neighbors = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
      ];
      for (const [nx, ny] of neighbors) {
        if (cellSet.has(`${nx},${ny}`) && !coordsChecked.has(`${nx},${ny}`)) {
          stack.push({x: nx, y: ny})
        }
      }
    }
    const temp: Coord[] = []
    for (const string of group) {
      const [sx, sy] = string.split(',')
      temp.push({x: +sx, y: +sy})
    }
    groups.push(temp)
    group.clear()
  }
  return groups;
}

export const pt1 = (inputLines: string[]): number => {

  const coordinates = new Map<string, Coord[]>
  const grid = inputLines.map(l => [...l])
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const element = grid[row][col]
      const currentCoord = {x: row, y: col}
      if (!coordinates.has(element)) {
        coordinates.set(element, [currentCoord])
      } else {
        coordinates.get(element)!.push(currentCoord)
      }
    }
  }

  const calculatePriceForCell = (coordinates: Coord[])=> {
    const cellSet = new Set(coordinates.map(({x, y}) => `${x},${y}`));
    let total = 0;
    let shared = 0;

    for (const {x, y} of coordinates) {
      total += 4;
      const neighbors = [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
      ];

      for (const [nx, ny] of neighbors) {
        if (cellSet.has(`${nx},${ny}`)) {
          shared++;
        }
      }
    }
    return (total - shared) * coordinates.length;
  }

  let price = 0;
  for (const [_, val] of coordinates) {
    for (const block of getBlocks(val)) {
      let res = calculatePriceForCell(block);
      price += res
    }
  }
  return price
}

export const pt2 = (inputLines: string[]): number => {
  const coordinates = new Map<string, Coord[]>
  const grid = inputLines.map(l => [...l])
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const element = grid[row][col]
      const currentCoord = {x: row, y: col}
      if (!coordinates.has(element)) {
        coordinates.set(element, [currentCoord])
      } else {
        coordinates.get(element)!.push(currentCoord)
      }
    }
  }

  let price = 0;
  for (const [_, val] of coordinates) {
    for (const block of getBlocks(val)) {
      let res = calculateEdges(block) ;
      price += res * block.length
    }
  }
  return price
}

const calculateEdges = (coordinates: Coord[]): number => {
  const points = new Set(coordinates.map(({x, y}) => `${x},${y}`));

  if (coordinates.every(c => c.x === coordinates[0].x)) return 4
  if (coordinates.every(c => c.y === coordinates[0].y)) return 4
  const minX = coordinates.map(c => c.x). reduce((acc, val) => Math.min(acc, val), 10000)
  const maxX = coordinates.map(c => c.x). reduce((acc, val) => Math.max(acc, val), 0)
  const minY = coordinates.map(c => c.y). reduce((acc, val) => Math.min(acc, val), 10000)
  const maxY = coordinates.map(c => c.y). reduce((acc, val) => Math.max(acc, val), 0)
  if ((maxX-minX+1)*(maxY-minY+1) === coordinates.length) return 4

  let corners = 0;
  for (const {x, y} of coordinates) {
    const neighbors = {
      UP: points.has(`${x-1},${y}`),
      DOWN: points.has(`${x+1},${y}`),
      LEFT:  points.has(`${x},${y-1}`),
      RIGHT: points.has(`${x},${y+1}`),
      UP_LEFT: points.has(`${x-1},${y-1}`),
      UP_RIGHT: points.has(`${x-1},${y+1}`),
      DOWN_LEFT: points.has(`${x+1},${y-1}`),
      DOWN_RIGHT: points.has(`${x+1},${y+1}`)
    }
    if (neighbors.UP && neighbors.RIGHT && !neighbors.UP_RIGHT) {
      corners += 1
    }
    if (neighbors.RIGHT && neighbors.DOWN && !neighbors.DOWN_RIGHT) {
      corners += 1
    }
    if (neighbors.DOWN && neighbors.LEFT && !neighbors.DOWN_LEFT) {
      corners += 1
    }
    if (neighbors.LEFT && neighbors.UP && !neighbors.UP_LEFT) {
      corners += 1
    }
    if (!neighbors.UP && !neighbors.RIGHT) {
      corners += 1
    }
    if (!neighbors.DOWN && !neighbors.RIGHT) {
      corners += 1
    }
    if (!neighbors.DOWN && !neighbors.LEFT) {
      corners += 1
    }
    if (!neighbors.UP && !neighbors.LEFT) {
      corners += 1
    }

  }

  return corners;
}
