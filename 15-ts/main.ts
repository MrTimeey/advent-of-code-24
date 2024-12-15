import { readFileSync } from 'fs'
import {pt1, pt2} from "./src/warehouseService";

const readFileLines = (filename: string): string[] =>
    readFileSync(filename).toString('utf-8').trimEnd().split('\n\n')

const [gridLines, movementLines] = readFileLines('./src/input.txt')
const inputGrind = gridLines.split('\n').map(l => l.trimEnd());
console.log(inputGrind)
const movements = movementLines.split('\n').map(l => l.trimEnd()).join('');

console.log('15.12.2023')
const startP1 = Date.now()
console.log(`Part 1: ${pt1(inputGrind, movements)} - Duration: ${Date.now() - startP1}`)
const startP2 = Date.now()
console.log(`Part 2: ${pt2(inputGrind, movements)} - Duration: ${Date.now() - startP2}`)
