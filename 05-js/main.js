import { readFileSync } from 'fs'
import { pt1, pt2 } from './src/pageService.js'

const readFile = (filename) => readFileSync(filename)
    .toString('utf-8')
    .trimEnd()
    .split('\r\n\r\n')
    .map(arr => arr.split('\n').map(line => line.trimEnd()))

const [rules, pages] = readFile('./src/input.txt')

console.log('05.12.2024')
const startP1 = Date.now()
console.log(`Part 1: ${pt1(rules, pages)} - Duration: ${Date.now() - startP1}`)
const startP2 = Date.now()
console.log(`Part 2: ${pt2(rules, pages)} - Duration: ${Date.now() - startP2}`)
