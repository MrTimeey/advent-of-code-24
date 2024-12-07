const parseInput = (line: string) => {
  const [result, numbers] = line.split(':');
  const expectedResult = +(result.trim());
  const inputNumbers = numbers.split(' ').map(n => +n);
  return [expectedResult, inputNumbers];
};

const resolve = (numbers: number[], index: number, currentValue: number, expectedResult: number, useCombination = false): boolean => {
  if (index === numbers.length) {
    return currentValue === expectedResult;
  }

  if (resolve(numbers, index + 1, currentValue + numbers[index], expectedResult, useCombination)) {
    return true;
  }

  if (resolve(numbers, index + 1, currentValue * numbers[index], expectedResult, useCombination)) {
    return true;
  }

  if (useCombination) {
    const combinedValue = parseInt(`${currentValue}${numbers[index]}`);
    if (resolve(numbers, index + 1, combinedValue, expectedResult, useCombination)) {
      return true;
    }
  }
  return false;
};

export const pt1 = (inputLines: string[]): number => {
  return inputLines
      .map(parseInput)
      .filter(([expectedResult, numbers]) => {
        return resolve(numbers as number[], 1, (numbers as number[])[0], expectedResult as number);
      })
      .reduce((acc, [expectedResult]) => acc + (expectedResult as number), 0);
};

export const pt2 = (inputLines: string[]): number => {
  return inputLines
      .map(parseInput)
      .filter(([expectedResult, numbers]) => {
        return resolve(numbers as number[], 1, (numbers as number[])[0], expectedResult as number, true);
      })
      .reduce((acc, [expectedResult]) => acc + (expectedResult as number), 0);

};
