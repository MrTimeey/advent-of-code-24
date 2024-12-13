import { readFileSync } from 'fs'
import {pt1, pt2} from "./src/clawService";

const readFileLines = (filename: string): string[][] =>
    readFileSync(filename).toString('utf-8').trimEnd().split('\r\n\r\n').map(game => game.split('\n')).map((line: string[]) => line.map(l => l.trimEnd()))

const inputLines = readFileLines('./src/input.txt')

console.log('13.12.2023')
const startP1 = Date.now()
console.log(`Part 1: ${pt1(inputLines)} - Duration: ${Date.now() - startP1}`)
const startP2 = Date.now()
console.log(`Part 2: ${pt2(inputLines)} - Duration: ${Date.now() - startP2}`)
