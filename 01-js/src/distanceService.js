const regex = /^(\d+)\s+(\d+)$/;

export const pt1 = (inputLines) => {
    const left = []
    const right = []

    for (const line of inputLines) {
        const [, l, r] = regex.exec(line)
        left.push(l)
        right.push(r)
    }
    left.sort()
    right.sort()

    return left
        .map((leftElement, i) => Math.max(leftElement, right[i]) - Math.min(leftElement, right[i]))
        .reduce((acc, val) => acc + val, 0)
}

const count = (arr, obj) => arr.filter(o => o === obj).length

export const pt2 = (inputLines) => {
    const left = []
    const right = []
    for (const line of inputLines) {
        const [, l, r] = regex.exec(line)
        left.push(l)
        right.push(r)
    }
    return left
        .map(leftElement => leftElement * count(right, leftElement))
        .reduce((acc, val) => acc + val, 0);
}




