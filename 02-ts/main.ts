import { readFileSync } from 'fs'
import {pt1, pt2} from "./src/numberService";

const readFileLines = (filename: string): string[] =>
    readFileSync(filename).toString('utf-8').trimEnd().split('\n').map((line: string) => line.trimEnd())

const inputLines = readFileLines('./src/input.txt')

console.log('02.12.2023')
const startPt1 = Date.now()
console.log(`Part 1: ${pt1(inputLines)} - Duration: ${Date.now() - startPt1}`)
const startPt2 = Date.now()
console.log(`Part 2: ${pt2(inputLines)} - Duration: ${Date.now() - startPt2}`)
