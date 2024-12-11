import { readFileSync } from 'fs'
import {pt1, pt2} from "./src/stoneService";

const readFileLines = (filename: string): string =>
    readFileSync(filename).toString('utf-8').trimEnd()

const inputLines = readFileLines('./src/input.txt')

console.log('11.12.2023')
const startP1 = Date.now()
let result = pt1(inputLines);
console.log(`Part 1: ${result} - Duration: ${Date.now() - startP1}`)
const startP2 = Date.now()
console.log(`Part 2: ${pt2(inputLines)} - Duration: ${Date.now() - startP2}`)
