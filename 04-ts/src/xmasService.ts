import {directions} from "./directions";

export const pt1 = (inputLines: string[]): number => {
    const searchedWord = 'XMAS'
    const grid = inputLines.map(line => [...line])
    const check = (startRow: number, startCol: number, rowDir: number, colDir: number) => {
        let row = startRow
        let col = startCol
        for (let i = 0; i < searchedWord.length; i++) {
            const cell = grid?.[row]?.[col]
            if (!cell || cell !== searchedWord[i]) {
                return false
            }
            row += rowDir
            col += colDir
        }
        return true

    }
    let result = 0
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            for (const [rowDir, colDir] of Object.values(directions)) {
                if (check(row, col, rowDir, colDir)) {
                    result += 1
                }
            }
        }
    }
    return result
}

export const pt2 = (inputLines: string[]): number => {
    const grid = inputLines.map(line => [...line])
    const getCellValue = (startRow: number, startCol: number, coords: number[]): string => {
        const [rowDir, colDir] = coords
        const row = startRow + rowDir
        const col = startCol + colDir
        return grid?.[row]?.[col] ?? ''
    }
    const searched = ['MAS', 'SAM']
    const check = (startRow: number, startCol: number) => {
        const cell = grid[startRow][startCol]
        if (cell !== 'A') return false
        const values = [
            getCellValue(startRow, startCol, directions.UP_RIGHT) + cell + getCellValue(startRow, startCol,directions.DOWN_LEFT),
            getCellValue(startRow, startCol,directions.UP_LEFT) + cell + getCellValue(startRow, startCol,directions.DOWN_RIGHT),
        ]
        return values.every(v => searched.includes(v));
    }
    let result = 0
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (check(row, col)) {
                result += 1
            }
        }
    }
    return result
}
