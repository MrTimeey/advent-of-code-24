import {expect, test} from 'vitest'
import {pt1, pt2} from './clawService'

test('Test simple part 1', () => {
    const input = [[
        'Button A: X+94, Y+34',
        'Button B: X+22, Y+67',
        'Prize: X=8400, Y=5400',
    ]]

    expect(pt1(input)).toBe(280)
})

test('Test other simple part 1', () => {
    const input = [[
        'Button A: X+17, Y+86',
        'Button B: X+84, Y+37',
        'Prize: X=7870, Y=6450',
    ]]

    expect(pt1(input)).toBe(200)
})

test('Test not possible part 1', () => {
    const input = [
        [
            'Button A: X+26, Y+66',
            'Button B: X+67, Y+21',
            'Prize: X=12748, Y=12176',
        ],
    ]

    expect(pt1(input)).toBe(0)
})

test('Test complex part 1', () => {
    const input = [
        [
            'Button A: X+94, Y+34',
            'Button B: X+22, Y+67',
            'Prize: X=8400, Y=5400',
        ],
        [
            'Button A: X+26, Y+66',
            'Button B: X+67, Y+21',
            'Prize: X=12748, Y=12176',
        ],
        [
            'Button A: X+17, Y+86',
            'Button B: X+84, Y+37',
            'Prize: X=7870, Y=6450',
        ],
        [
            'Button A: X+69, Y+23',
            'Button B: X+27, Y+71',
            'Prize: X=18641, Y=10279'
        ]
    ]

    expect(pt1(input)).toBe(480)
})

test('Test input part 2', () => {
    const input = [
        [
            'Button A: X+94, Y+34',
            'Button B: X+22, Y+67',
            'Prize: X=8400, Y=5400',
        ],
        [
            'Button A: X+26, Y+66',
            'Button B: X+67, Y+21',
            'Prize: X=12748, Y=12176',
        ],
        [
            'Button A: X+17, Y+86',
            'Button B: X+84, Y+37',
            'Prize: X=7870, Y=6450',
        ],
        [
            'Button A: X+69, Y+23',
            'Button B: X+27, Y+71',
            'Prize: X=18641, Y=10279'
        ]
    ]

    expect(pt2(input)).toBe(480)
})

