class LinkedList {
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
        return this._length || 0;
    }

    /**
     * @return{Boolean}
     */
    isEmpty() {
        return this.size() === 0;
    }

    /**
     * @param{Array} arr
     * @return{Object}
     */
    from(arr) {
        if (Array.isArray(arr)) {
            arr.forEach(i => this.append(i));
        }
        return this;
    }

    /**
     * @param{Function} compareFunction
     * @return{Object}
     */
    sort(compareFunction) {
        const list = this.toArray();
        list.sort(compareFunction);
        this.clear();
        this.from(list);
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
     * @param{Any} el
     * @return{Object}
     */
    append(el) {
        if (this._length === 0) {
            this._tail = this._head = this._node(el);
        }
        else {
            this._tail.next = this._node(el);
            this._tail = this._tail.next;
        }
        this._length++;
        return this;
    }

    /**
     * @param{Any} el
     * @return{Object}
     */
    prepend(el) {
        if (this._length === 0) {
            this._head = this._node(el);
            this._tail = this._head;
        }
        else {
            this._head = this._node(el, this._head);
        }
        this._length++;
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
     * @param{Function} callback
     * @return{Object}
     */
    forEach(cb) {
        if (typeof cb === 'function') {
            let current = this._head;
            let i = 0;
            while (current && i < this.size()) {
                cb(current.element, i);
                current = current.next;
                i++;
            }
        }
        return this;
    }

    /**
     * @param{Number} index
     * @param{Any} el
     * @return{Object}
     */
    insert(index, el) {
        if (index === 0) this.prepend(el);
        else if (index > 0 && index < this.size()) {
            let current = this._head;
            let i = 0;
            while (current && i < this.size()) {
                if (index - 1 === i) break;
                current = current.next;
                i++;
            }
            current.next = this._node(el, current.next);
            this._length++;
        }
        return this;
    }

    /**
     * @param{Number} index
     * @return{Object}
     */
    remove(index) {
        let p = null;
        if (index === 0) {
            p = this._head;
            this._head = this._head.next;
            this._length--;
        }
        else if (index > 0 && index < this.size()) {
            let current = this._head;
            let i = 0;
            while (current && i < this.size()) {
                if (index - 1 === i) break;
                current = current.next;
                i++;
            }
            p = current.next;
            current.next = current.next.next;
            this._length--;
        }
        return p;
    }

    /**
     * @param{Number} index
     * @return{Object}
     */
    get(index) {
        let current = this._head;
        let i = 0;
        while (current && i < this.size()) {
            if (index === i) break;
            current = current.next;
            i++;
        }
        return current.element;
    }

    /**
     * @param{Number} index
     * @param{Any} el
     * @return{Object}
     */
    set(index, el) {
        let current = this._head;
        let i = 0;
        while (current && i < this.size()) {
            if (index === i) break;
            current = current.next;
            i++;
        }
        current.element = el;
        return this;
    }

    /**
     * @param{Function} callback
     * @return{Object}
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

    /**
     * @param{Function} callback
     * @return{Object}
     */
    findIndex(cb) {
        if (typeof cb === 'function') {
            let current = this._head;
            let i = 0;
            while (current && i < this.size()) {
                if (!!cb(current.element)) return i;
                current = current.next;
                i++;
            }
        }
        return -1;
    }

    /**
     * @param{Function} callback
     * @return{Object}
     */
    find(cb) {
        if (typeof cb === 'function') {
            let current = this._head;
            let i = 0;
            while (current && i < this.size()) {
                if (!!cb(current.element)) return current.element;
                current = current.next;
                i++;
            }
        }
        return null;
    }
}

module.exports = LinkedList;