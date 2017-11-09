
const { LinkedList } = require('../src');

describe('List - LinkedList', () => {

    test('size', () => {
        let list = new LinkedList(['A', 'B', 'C']);
        expect(list.size()).toBe(3);
    });

    test('toArray', () => {
        let list = new LinkedList(['A', 'B', 'C']);
        expect(list.toArray()).toEqual(['A', 'B', 'C']);
    });

    test('append', () => {
        let list = new LinkedList();
        expect(list.append('A').toArray()).toEqual(['A']);
        expect(list.append('B').toArray()).toEqual(['A', 'B']);
        expect(list.append('C').toArray()).toEqual(['A', 'B', 'C']);
    });

    test('prepend', () => {
        let list = new LinkedList();
        expect(list.prepend('A').toArray()).toEqual(['A']);
        expect(list.prepend('B').toArray()).toEqual(['B', 'A']);
        expect(list.prepend('C').toArray()).toEqual(['C', 'B', 'A']);
    });

    test('hasAt', () => {
        let list = new LinkedList(['A', 'B', 'C', 'D', 'E']);
        expect(list.hasAt(3)).toBeTruthy();
        expect(list.hasAt(-2)).toBeFalsy();
        expect(list.hasAt(7)).toBeFalsy();
    });

    test('has', () => {
        let list = new LinkedList(['A', 'B', 'C', 'D', 'E']);
        expect(list.has(i => i === 'D')).toBeTruthy();
        list = new LinkedList([{ id: 1 }, { id: 2 }]);
        expect(list.has(i => i.id === 2)).toBeTruthy();
    });

    test('clear', () => {
        let list = new LinkedList(['A', 'B', 'C', 'D', 'E']);
        expect(list.clear().toArray()).toEqual([]);
    });

    test('isEmpty', () => {
        let list = new LinkedList(['A', 'B', 'C', 'D', 'E']);
        expect(list.clear().isEmpty()).toBeTruthy();
    });

    test('from', () => {
        let list = new LinkedList();
        expect(list.from(['A', 'B', 'C']).toArray()).toEqual(['A', 'B', 'C']);
    });

    test('insert', () => {
        let list = new LinkedList(['A', 'B', 'C']);
        expect(list.insert(0, 'D').toArray()).toEqual(['D', 'A', 'B', 'C']);
        expect(list.insert(1, 'G').toArray()).toEqual(['D', 'G', 'A', 'B', 'C']);
        expect(list.insert(4, 'S').toArray()).toEqual(['D', 'G', 'A', 'B', 'S', 'C']);

        list = new LinkedList([{ name: 'Aer', id: 1 }, { name: 'Boe', id: 2 }]);
        expect(list.insert(1, { name: 'Tea', id: 3 }).toArray()).toEqual([
            { name: 'Aer', id: 1 },
            { name: 'Tea', id: 3 },
            { name: 'Boe', id: 2 },
        ]);
    });

    test('forEach', () => {
        let list = new LinkedList([1, 2, 3]);
        let sum = 0;
        list.forEach(i => sum += i);
        expect(sum).toBe(6);
    });

    test('remove', () => {
        let list = new LinkedList(['A', 'B', 'C', 'D', 'E']);
        expect(list.remove(i => i === 'E').toArray())
            .toEqual(['A', 'B', 'C', 'D']);
    });

    test('removeAt', () => {
        let list = new LinkedList(['A', 'B', 'C', 'D', 'E']);
        expect(list.removeAt(0).toArray()).toEqual(['B', 'C', 'D', 'E']);
        expect(list.removeAt(0).toArray()).toEqual(['C', 'D', 'E']);
        expect(list.removeAt(2).toArray()).toEqual(['C', 'D']);
    });

    test('findIndex', () => {
        let list = new LinkedList(['A', 'B', 'C', 'D']);
        expect(list.findIndex('C')).toBe(2);
        list = new LinkedList([{ id: 1 }, { id: 2 }]);
        expect(list.findIndex(i => i.id === 2)).toBe(1);
    });

    test('get', () => {
        let list = new LinkedList(['A', 'B', 'C']);
        expect(list.get(0)).toEqual('A');
        expect(list.get(1)).toEqual('B');
        expect(list.get(2)).toEqual('C');
    });

    test('set', () => {
        let list = new LinkedList(['A', 'B', 'C']);
        expect(list.set(1, 'G').toArray()).toEqual(['A', 'G', 'C']);
        expect(list.set(0, 'S').toArray()).toEqual(['S', 'G', 'C']);
    });
});





