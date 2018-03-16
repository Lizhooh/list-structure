const Queue = require('../src/queue');

describe('Queue', () => {

    test('size', () => {
        const queue = new Queue(['A', 'B', 'C']);
        expect(queue.size()).toBe(3);
    });

    test('push', () => {
        const queue = new Queue();
        expect(queue.push('A').toArray()).toEqual(['A']);
        expect(queue.push('B').toArray()).toEqual(['A', 'B']);
        expect(queue.size()).toBe(2);
    });

    test('pop', () => {
        const queue = new Queue(['A', 'B', 'C']);
        expect(queue.pop()).toEqual('A');
        expect(queue.pop()).toEqual('B');
        expect(queue.size()).toBe(1);
    });

    test('front', () => {
        const queue = new Queue(['A', 'B', 'C']);
        expect(queue.front()).toEqual('A');
        expect(queue.size()).toBe(3);
    });

    test('back', () => {
        const queue = new Queue(['A', 'B', 'C']);
        expect(queue.back()).toEqual('C');
        expect(queue.size()).toBe(3);
    });

    test('clear', () => {
        const queue = new Queue(['A', 'B', 'C']);
        queue.clear();
        expect(queue.size()).toBe(0);
    });

    test('isEmpty', () => {
        const queue = new Queue(['A', 'B', 'C']);
        expect(queue.isEmpty()).toBeFalsy();
        queue.clear();
        expect(queue.isEmpty()).toBeTruthy();
    });

    test('forEach', () => {
        const queue = new Queue(['A', 'B', 'C']);
        let str = '';
        queue.forEach(i => str += i);
        expect(str).toEqual('ABC');
    });

    test('has', () => {
        const queue = new Queue(['A', 'B', 'C']);
        expect(queue.has(i => i === 'C')).toBeTruthy();
        expect(queue.has(i => i === 'S')).toBeFalsy();
    });

})