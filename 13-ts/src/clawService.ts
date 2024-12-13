const regex = /X[+|=](\d+),\s+Y[+|=](\d+)$/

export const pt1 = (inputLines: string[][]): number => {
  let totalCost = 0
  for (const game of inputLines) {
    const [buttonA, buttonB, prize] = game
    const [,aRaiseX, aRaiseY] = regex.exec(buttonA)!
    const [,bRaiseX, bRaiseY] = regex.exec(buttonB)!
    const [,prizeX, prizeY] = regex.exec(prize)!

    let minTokens = Infinity
    let best: {pressedA?: number, pressedB?: number, cost?: number} = {}
    for (let pressedA = 1; pressedA <= 100; pressedA++) {
      for (let pressedB = 1; pressedB <= 100; pressedB++) {
        const currentX = pressedA * +aRaiseX + pressedB * +bRaiseX;
        const currentY = pressedA * +aRaiseY + pressedB * +bRaiseY;
        if (currentX === +prizeX && currentY === +prizeY) {
          const cost = pressedA * 3 + pressedB;
          if (cost < minTokens) {
            minTokens = cost;
            best = { pressedA, pressedB, cost };
          }
        }
      }
    }
    totalCost += best?.cost ?? 0
  }
  return totalCost
}

export const pt2 = (inputLines: string[][]): number => {
  let totalCost = 0
  for (const game of inputLines) {
    const [buttonA, buttonB, prize] = game
    const [,aRaiseX, aRaiseY] = regex.exec(buttonA)!
    const [,bRaiseX, bRaiseY] = regex.exec(buttonB)!
    const [,prX, prY] = regex.exec(prize)!
    const prizeX = +prX + 10000000000000
    const prizeY = +prY + 10000000000000

    const minimumCost = calculateMinTokensToWin(+aRaiseX, +aRaiseY, +bRaiseX, +bRaiseY, +prizeX, +prizeY)
    totalCost += minimumCost?.cost ?? 0
  }
  return totalCost
}

function calculateMinTokensToWin(aRaiseX: number, aRaiseY: number, bRaiseX: number, bRaiseY: number, prizeX: number, prizeY: number): {pressedA?: number, pressedB?: number, cost?: number} {
  const pressedB = Math.floor((aRaiseY * prizeX - aRaiseX * prizeY) / (aRaiseY * bRaiseX - aRaiseX * bRaiseY));
  const pressedA = Math.floor((prizeX - bRaiseX * pressedB) / aRaiseX);
  return aRaiseX * pressedA + bRaiseX * pressedB === prizeX && aRaiseY * pressedA + bRaiseY * pressedB === prizeY ? { pressedA, pressedB, cost: pressedA*3+pressedB} : {};
}
