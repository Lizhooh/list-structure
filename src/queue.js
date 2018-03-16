
class Queue {
    constructor(arr) {
        this._head = null;
        this._tail = null;
        this._length = 0;
        this._node = (el, next = null) => ({
            element: el,
            next: next,
        });

        this.from(arr);
    }

    /**
     * @return{Number}
     */
    size() {
        return this._length;
    }

    /**
     * @return{Boolean}
     */
    isEmpty() {
        return this.size() === 0;
    }

    push(el) {
        if (this.size() === 0) {
            this._tail = this._head = this._node(el);
        }
        else {
            this._tail.next = this._node(el);
            this._tail = this._tail.next;
        }
        this._length++;
        return this;
    }

    pop() {
        const p = this._head;
        this._head = this._head.next;
        this._length--;
        return p.element;
    }

    front() {
        return this._head.element;
    }

    back() {
        return this._tail.element;
    }

    /**
     * @param{Function} callback
     * @return{Object}
     */
    forEach(cb) {
        if (typeof cb === 'function') {
            let current = this._head;
            let i = 0;
            while (current && i < this.size()) {
                cb(current.element);
                current = current.next;
                i++;
            }
        }
        return this;
    }

    /**
     * @return{Array}
     */
    toArray() {
        let arr = [];
        this.forEach(i => arr.push(i));
        return arr;
    }

    /**
     * @param{Array} arr
     * @return{Object}
     */
    from(arr) {
        if (Array.isArray(arr)) {
            arr.forEach(i => this.push(i));
        }
        return this;
    }

    /**
     * @return{Object}
     */
    clear() {
        this._head = null;
        this._tail = null;
        this._length = 0;
        return this;
    }

    /**
     * @param{Function} callback
     * @return{Boolean}
     */
    has(cb) {
        if (typeof cb === 'function') {
            let current = this._head;
            let i = 0;
            while (current && i < this.size()) {
                if (!!cb(current.element)) return true;
                current = current.next;
                i++;
            }
        }
        return false;
    }
}

module.exports = Queue;