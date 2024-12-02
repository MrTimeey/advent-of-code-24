import { readFileSync } from 'fs'
import { pt1, pt2 } from './src/distanceService.js'

const readFileLines = (filename) => readFileSync(filename)
  .toString('utf-8')
  .trimEnd()
  .split('\n')
  .map(line => line.trimEnd())


const inputData = readFileLines('./src/input.txt')

console.log('01.12.2024')
const startPt1 = Date.now()
console.log(`Part 1: ${pt1(inputData)} - Duration ${Date.now() - startPt1} ms`)

const startPt2 = Date.now()
console.log(`Part 2: ${pt2(inputData)} - Duration ${Date.now() - startPt2} ms`)
