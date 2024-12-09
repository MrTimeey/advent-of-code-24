import { readFileSync } from 'fs'
import {pt1, pt2} from "./src/fragmentService";

const readFileLine = (filename: string): string =>
    readFileSync(filename).toString('utf-8').trimEnd()

const input = readFileLine('./src/input.txt')

console.log('09.12.2023')
const startP1 = Date.now()
console.log(`Part 1: ${pt1(input)} - Duration: ${Date.now() - startP1}`)
const startP2 = Date.now()
console.log(`Part 2: ${pt2(input)} - Duration: ${Date.now() - startP2}`)
