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

const getAntennas = (grid) => {
  const result = {}
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      const element = grid[row][col]
      if (element === '.') continue
      result[element] = [...result?.[element] ?? [], [row, col]]
    }
  }
  return result
}

export const pt1 = (inputLines) => {
  const grid = inputLines.map(l => [...l]);
  const antennas = getAntennas(grid)

  const antinodes = new Set;
  for (const coords of Object.values(antennas)) {
    if (coords.length < 2) continue
    for (const baseAntenna of coords) {
      for (const partnerAntenna of coords) {
        if (baseAntenna === partnerAntenna) continue
        const x = partnerAntenna[0] - (baseAntenna[0] - partnerAntenna[0]);
        const y = partnerAntenna[1] - (baseAntenna[1] - partnerAntenna[1]);

        if(x >= 0 && x < grid[0].length && y >= 0 && y < grid.length) {
          antinodes.add(`${x}|${y}`);
        }
      }
    }
  }
  return antinodes.size
}

export const pt2 = (inputLines) => {
  const grid = inputLines.map(l => [...l]);
  const antennas = getAntennas(grid)

  const antinodes = new Set;
  for (const coords of Object.values(antennas)) {
    if (coords.length < 2) continue
    for (const baseAntenna of coords) {
      for (const partnerAntenna of coords) {
        if (baseAntenna === partnerAntenna) continue

        const distX = baseAntenna[0] - partnerAntenna[0];
        const distY = baseAntenna[1] - partnerAntenna[1];

        let x = partnerAntenna[0];
        let y = partnerAntenna[1];

        while(x >= 0 && x < grid[0].length && y >= 0 && y < grid.length) {
          antinodes.add(`${x}|${y}`);
          x += distX
          y += distY
        }
      }
    }
  }
  return antinodes.size
}
