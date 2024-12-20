import { readFileSync } from 'fs'
import {pt1, pt2} from "./src/designService";

const readFileLines = (filename: string): string[] =>
    readFileSync(filename).toString('utf-8').trimEnd().split('\r\n\r\n')

const [inputTemplates, inputLines] = readFileLines('./src/input.txt')
const templates = inputTemplates.split(',').map(l => l.trimEnd()).map(l => l.trimStart())
const towels = inputLines.split('\n').map(l => l.trimEnd())

console.log('19.12.2023')
const startP1 = Date.now()
console.log(`Part 1: ${pt1(templates, towels)} - Duration: ${Date.now() - startP1}`)
const startP2 = Date.now()
console.log(`Part 2: ${pt2(templates, towels)} - Duration: ${Date.now() - startP2}`)
