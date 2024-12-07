const parseInput = (line: string) => {
  const [result, numbers] = line.split(':')
  const expectedResult = +(result.trim())
  const inputNumbers = numbers.split(' ').map(n => +n)
  return [expectedResult, inputNumbers]
}

const permutate = (numbers: number [], operators = ["+", "*"]): string[] => {
  const result: string[] = [];

  const resolve = (i: number, current: string) => {
    if (i === numbers.length) {
      result.push(current);
      return;
    }
    for (const operator of operators) {
      resolve(i + 1, current + operator + numbers[i]);
    }
  }
  resolve(1, `${numbers[0]}`)
  return result
}

function evaluateExpression(calculation: string) {
  const tokens = ('+' + calculation).split(/(?=[+*])/);
  let result = 0;
  for (const token of tokens) {
    if (token.startsWith('*')) {
      result += +(token.slice(1))
    } else if(token.includes('+')) {
      result *= +(token.slice(1))
    }
  }
  return result;
}

export const pt1 = (inputLines: string[]): number => {
  return inputLines
      .map(parseInput)
      .map(input => {
        const [expectedResult, numbers] = input
        return [expectedResult, permutate(numbers as number[])]
      })
      .filter(input => {
        const [expectedResult, calculations] = input
        for (const calculation of (calculations as string[])) {
          if (expectedResult === evaluateExpression(calculation)) {
            return true
          }
        }
        return false
      })
      .reduce((acc, val) => acc + (val[0] as number), 0);
}

export const pt2 = (inputLines: string[]): number => {
  return inputLines
      .map(parseInput)
      .map(input => {
        const [expectedResult, numbers] = input
        return [expectedResult, permutate(numbers as number[], ['+', '*', '|'])]
      })
      .filter(input => {
        const [expectedResult, calculations] = input
        for (const calculation of (calculations as string[])) {

          if (expectedResult === evaluateExpression(calculation.replaceAll('|', ''))) {
            return true
          }
        }
        return false
      })
      .reduce((acc, val) => acc + (val[0] as number), 0);

}
