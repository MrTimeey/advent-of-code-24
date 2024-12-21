import {PriorityQueue} from "./PriorityQueue";

interface Node {
  x: number;
  y: number;
  direction: '^' | 'v' | '<' | '>';
  score: number;
  previous: Node | undefined;
}

const directions: {[name: string]: [x: number, y: number, dir: '^' | 'v' | '<' | '>']} = {
  UP: [-1, 0, '^'],
  DOWN: [1, 0, 'v'],
  RIGHT: [0, 1, '>'],
  LEFT: [0, -1, '<'],
}

const findStartingPoint = (grid: string[][]): [x: number, y: number] => {
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 'S') return [row, col]
    }
  }
  return [0,0]
}

const printGrid = (grid: string[][], path: Set<string>) => {
  for (let row = 0; row < grid.length; row++) {
    let val = ''
    for (let col = 0; col < grid[0].length; col++) {
      if (path.has(`${row}|${col}`)) {
        val += 'x'
      } else {
        val += grid[row][col]
      }
    }
    console.log(val)
  }
}

export const pt1 = (inputLines: string[]): number => {
  const grid = inputLines.map(l => [...l])
  const [x, y] = findStartingPoint(grid)
  const queue = new PriorityQueue<Node>()
  const scores = new Map<string, number>();
  const visited = new Set<string>();
  visited.add(`${x}|${y}`)
  queue.enqueue({x,y, direction: '>', score: 0, previous: undefined})
  scores.set(`${x}|${y}`, 0);
  while (!queue.isEmpty()) {
    const node = queue.dequeue()
    if (!node) break
    const { x, y, direction, score } = node;
    const element = grid[node.x][node.y]
    if (element === 'E') {
      //printGrid(grid, node.path)
      return node.score
    }
    for (const [dx, dy, newDir] of Object.values(directions)) {
      const newX = x + dx;
      const newY = y + dy;

      if (newX < 0 || newY < 0 || newX >= grid.length || newY >= grid[0].length) continue;
      const nextElement = grid[newX][newY];
      if (nextElement === '#') continue;

      const newScore = (direction !== newDir ? score + 1001 : score + 1);
      const key = `${newX}|${newY}`;

      if (!scores.has(key) || newScore < scores.get(key)!) {
        scores.set(key, newScore);
        visited.add(key);
        queue.enqueue({ x: newX, y: newY, direction: newDir, score: newScore, previous: node });
      }
    }
  }
  return 0
}

export const pt2 = (inputLines: string[]): number => {
  return 0
}
