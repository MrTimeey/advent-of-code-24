import {expect, test} from "vitest";
import {Deque} from "./Deque";

test('Deque push', () => {
    const deque = new Deque<string>()
    expect(deque.isEmpty()).toBe(true)
    deque.push('Tim')
    expect(deque.isEmpty()).toBe(false)
    expect(deque.size()).toBe(1)
    deque.push('Tom')
    expect(deque.size()).toBe(2)
})

test('Deque unshift', () => {
    const deque = new Deque<string>()
    expect(deque.isEmpty()).toBe(true)
    deque.push('Tim')
    expect(deque.isEmpty()).toBe(false)
    expect(deque.size()).toBe(1)
    deque.unshift('Tom')
    expect(deque.size()).toBe(2)

    expect(deque.shift()).toBe('Tom')
    expect(deque.shift()).toBe('Tim')
    expect(deque.shift()).toBe(undefined)
})

test('Deque unshift on empty', () => {
    const deque = new Deque<string>()
    expect(deque.isEmpty()).toBe(true)
    deque.unshift('Tim')
    deque.unshift('Tom')
    expect(deque.size()).toBe(2)

    expect(deque.shift()).toBe('Tom')
    expect(deque.shift()).toBe('Tim')
    expect(deque.shift()).toBe(undefined)
})

test('Deque pop', () => {
    const deque = new Deque<string>()
    expect(deque.isEmpty()).toBe(true)
    deque.push('Tim')
    deque.push('Tom')
    expect(deque.isEmpty()).toBe(false)

    expect(deque.pop()).toBe('Tom')
    expect(deque.pop()).toBe('Tim')
    expect(deque.pop()).toBe(undefined)

    expect(deque.isEmpty()).toBe(true)
})

test('Deque shift', () => {
    const deque = new Deque<string>()
    expect(deque.isEmpty()).toBe(true)
    deque.push('Tim')
    deque.push('Tom')
    expect(deque.isEmpty()).toBe(false)

    expect(deque.shift()).toBe('Tim')
    expect(deque.shift()).toBe('Tom')
    expect(deque.shift()).toBe(undefined)

    expect(deque.isEmpty()).toBe(true)
})

test('Deque with existing', () => {
    const deque = new Deque<string>(['Tim', 'Tom'])
    expect(deque.isEmpty()).toBe(false)
    expect(deque.size()).toBe(2)
    expect(deque.pop()).toBe('Tom')

    expect(deque.pop()).toBe('Tim')
    expect(deque.pop()).toBe(undefined)
    expect(deque.isEmpty()).toBe(true)
})
