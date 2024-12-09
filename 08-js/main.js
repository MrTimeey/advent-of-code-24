import { readFileSync } from 'fs'
import { pt1, pt2 } from './src/antennaService.js'

const readFileLines = (filename) => readFileSync(filename)
    .toString('utf-8')
    .trimEnd()
    .split('\n')
    .map(line => line.trimEnd())


const inputData = readFileLines('./src/input.txt')

console.log('08.12.2024')
const startP1 = Date.now()
console.log(`Part 1: ${pt1(inputData)} - Duration: ${Date.now() - startP1}`)
const startP2 = Date.now()
console.log(`Part 2: ${pt2(inputData)} - Duration: ${Date.now() - startP2}`)
