import {Deque} from "./common/Deque";

type Coord = {
  x: number,
  y: number
}

type GridValue = Coord & {
  value: number
}

const directions: {[name: string]: Coord} = {
  UP: {x:-1,y:0},
  DOWN: {x:1,y:0},
  RIGHT: {x: 0, y: 1},
  LEFT: {x: 0, y:-1}
}

export const pt1 = (inputLines: string[]): number => {
  const grid = inputLines.map(l => [...l]).map(s => s.map(n => +n))
  const getValue = (coord: Coord) => grid?.[coord.x]?.[coord.y]
  const findHeads = (startCoord: GridValue) => {
    const deque = new Deque<GridValue>()
    const heads = new Set<string>
    deque.push(startCoord)
    while (!deque.isEmpty()) {
      const pos = deque.pop()
      if (!pos) continue
      for (const direction of Object.values(directions)) {
        const newCoord = {x: pos.x + direction.x, y: pos.y + direction.y};
        const nextValue = getValue(newCoord)
        if (nextValue === 9) {
          heads.add(`${newCoord.x}|${newCoord.y}`)
          continue
        }
        if (nextValue && nextValue - pos.value === 1) {
          deque.push({...newCoord, value: nextValue})
        }
      }
    }
    return heads
  }
  let result = 0
  for (let row = 0; row < grid.length; row++) {
    if (!grid[row].includes(0)) continue
    for (let col = 0; col < grid[0].length; col++) {
      const element = grid[row][col]
      if (element !== 0) continue
      result += findHeads({x:row, y: col, value: element}).size
    }
  }
  return result
}

export const pt2 = (inputLines: string[]): number => {
  return 0
}
