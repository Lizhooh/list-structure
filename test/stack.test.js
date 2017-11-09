const { Stack } = require('../src');


describe('Stack', () => {

    test('size', () => {
        const stack = new Stack(['A', 'B', 'C']);
        expect(stack.size()).toBe(3);
    });

    test('push', () => {
        const stack = new Stack();
        expect(stack.push('A').toArray()).toEqual(['A']);
        expect(stack.push('B').toArray()).toEqual(['A', 'B']);
    });

    test('pop', () => {
        const stack = new Stack(['A', 'B', 'C']);
        expect(stack.pop()).toEqual('C');
        expect(stack.pop()).toEqual('B');
    });

    test('peek', () => {
        const stack = new Stack(['A', 'B', 'C']);
        expect(stack.peek()).toEqual('C');
        expect(stack.size()).toBe(3);
    });

    test('clear', () => {
        const stack = new Stack(['A', 'B', 'C']);
        stack.clear();
        expect(stack.length).toBe(0);
    });

    test('isEmpty', () => {
        const stack = new Stack(['A', 'B', 'C']);
        expect(stack.isEmpty()).toBeFalsy();
        stack.clear();
        expect(stack.isEmpty()).toBeTruthy();
    });

    test('forEach', () => {
        const stack = new Stack(['A', 'B', 'N']);
        let str = '';
        stack.forEach(i => str += i);
        expect(str).toEqual('NBA');
    });

    test('has', () => {
        const stack = new Stack(['A', 'B', 'C']);
        expect(stack.has('A')).toBeTruthy();
        expect(stack.has(i => i === 'C')).toBeTruthy();
        expect(stack.has(i => i === 'S')).toBeFalsy();
    });
})
