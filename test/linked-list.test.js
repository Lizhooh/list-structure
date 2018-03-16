const Linked = require('../src/linked-list');


describe('Linked List', () => {
    test('linked append', () => {
        const link = new Linked();
        link.append(1).append(2);
        expect(link.size()).toBe(2);
    });
    test('linked prepend', () => {
        const link = new Linked();
        link.prepend(1).prepend(2);
        expect(link.toArray()).toEqual([2, 1]);
    });
    test('linked toArray', () => {
        const link = new Linked();
        link.append(1).append(2);
        expect(link.toArray()).toEqual([1, 2]);
    });
    test('linked foreach', () => {
        const link = new Linked();
        link.append(1).append(2);
        let sum = 0;
        link.forEach(i => sum += i);
        expect(sum).toBe(3);
    });
    test('linked get/set', () => {
        const link = new Linked();
        link.append(1).append(2);
        link.set(1, 5);
        expect(link.get(1)).toBe(5);
    });
    test('linked insert', () => {
        const link = new Linked();
        link.append(1).append(2);
        link.insert(1, 5);
        expect(link.toArray()).toEqual([1, 5, 2]);
        expect(link.size()).toBe(3);
    });
    test('linked remove', () => {
        const link = new Linked();
        link.append(1).append(2);
        link.remove(1);
        expect(link.toArray()).toEqual([1]);
        expect(link.size()).toBe(1);
    });
    test('linked has', () => {
        const link = new Linked();
        link.append(1).append(2);
        expect(link.has(i => i === 2)).toBeTruthy();
        expect(link.has(i => i === 3)).toBeFalsy();
    });
    test('linked findIndex', () => {
        const link = new Linked();
        link.append({ id: 1 }).append({ id: 2 });
        expect(link.findIndex(i => i.id === 2)).toBe(1);
        expect(link.findIndex(i => i.id === 3)).toBe(-1);
    });
    test('linked find', () => {
        const link = new Linked();
        link.append({ id: 1 }).append({ id: 2 });
        expect(link.find(i => i.id === 2)).toEqual({ id: 2 });
        expect(link.find(i => i.id === 3)).toEqual(null);
    });
    test('linked sort', () => {
        const link = new Linked([{ id: 1 }, { id: 7 }, { id: 5 }]);
        expect(link.sort((a, b) => a.id - b.id).toArray().map(i => i.id)).toEqual([1, 5, 7]);
    });
})