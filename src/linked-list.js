class LinkedList extends Object {

    constructor(arr) {
        super();

        this._head = null;
        this._tail = null;
        this._length = 0;
        this._Node = function (element, next = null) {
            return {
                element: element,
                next: next,
            }
        };

        Array.isArray(arr) &&
            arr.forEach(item => this.append(item));
    }

    /**
     * @param{Any} element
     * @return{Object}
     */
    append(element) {
        const node = {
            element: element, next: null
        };
        let current = this._head;

        if (this._head === null) {  // first item
            this._head = node;
            this._tail = node;
        }
        else {
            this._tail.next = node;
        }

        this._tail = node;
        this._length++;
        return this;
    }

    /**
     * @param{Any} element
     * @return{Object}
     */
    prepend(element) {
        const node = {
            element: element, next: this._head
        };
        if (this._head === null) {
            this._tail = node;
        }
        this._head = node;
        this._length++;
        return this;
    }

    /**
     * @param{Function} cb(item, index)
     * @return{Object}
     */
    forEach(cb) {
        let current = this._head;
        let i = 0;
        while (current) {
            typeof cb === 'function' && cb(current.element, i);
            current = current.next;
            i++;
        }
        return this;
    }

    /**
     * @param{Number} index: 0 ~ length - 1
     * @return{Object}
     */
    removeAt(index) {
        if (index >= 0 && index < this._length) {
            let current = this._head;
            if (this._head === null) return null;
            if (index === 0) {
                this._head = current.next;
            }
            else {
                let i = 0, temp = current;
                while (i++ < index) {
                    temp = current;
                    current = current.next;
                }
                temp.next = current.next;

                if (index === this._length - 1) {
                    this._tail = temp;
                }
            }
            this._length--;
        }
        else {
            console.warn('removeAt: the index is not in the range.');
        }
        return this;
    }

    /**
     * @param{Any} element
     * @param{Function} any
     * @return{Object}
     */
    remove(any) {
        let current = this._head, temp = null, prev = null, i = 0;
        if (this._head === null) return null;

        do {
            temp = current;
            if (typeof any === 'function') {
                if (any(temp.element) === true) {
                    break;
                }
            }
            else {
                if (any === temp.element) {
                    break;
                }
            }
            prev = current;
            current = current.next;
            i++;
        } while (current.next);

        if (i === 0) { // first item
            this._head = temp.next;
        }
        else {
            prev.next = current.next;

            if (i === this._length - 1) {
                this._tail = prev;
            }
        }
        this._length--;
        return this;
    }

    /**
     * @return{Array}
     */
    toArray() {
        let current = this._head, arr = [];
        while (current) {
            arr.push(current.element);
            current = current.next;
        }
        return arr;
    }

    /**
     * @param{Array} arr
     * @return{Object}
     */
    from(arr) {
        if (Array.isArray(arr)) {
            arr.forEach((item, index) => {
                this.append(item);
            });
        }
        else {
            console.warn('from: the arr is not a array.');
        }
        return this;
    }

    /**
     * @return{Boolean}
     */
    isEmpty() {
        return this._length === 0;
    }

    /**
     * @return{Object} list
     */
    clear() {
        this._head = null;
        this._tail = null;
        this._length = 0;
        return this;
    }

    /**
     * @param{Number} index: 0 ~ length
     * @param{Any} element
     */
    insert(index, element) {
        if (index >= 1 && index < this._length) {
            let current = this._head;
            let i = 0, temp = current;
            while (i++ < index) {
                temp = current;
                current = current.next;
            }
            temp.next = {
                element: element,
                next: temp.next,
            }
            this._length++;
        }
        else if (index === 0) {
            this.prepend(element);
        }
        else if (index === this._length) {
            this.append(element);
        }
        else {
            console.warn('insert: the index is not in the range.');
        }

        return this;
    }

    /**
     * @param{Number} index: 0 - length - 1
     * @return{Boolean}
     */
    hasAt(index) {
        if (index >= 0 && index < this._length) {
            let i = 0, current = this._head;
            while (current) {
                if (i === index) {
                    return true;
                }
                i++;
                current = current.next;
            }
        }
        else {
            console.warn('hasAt: the index is not in the range.');
        }
        return false;
    }

    /**
     * @param{Any}
     * @return{Boolean}
     */
    has(any) {
        let current = this._head;
        while (current) {
            if (typeof any === 'function' && any(current.element) === true) {
                return true;
            }
            else if (current.element === any) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    /**
     * @param{Any} any
     * @return{Number}
     */
    findIndex(any) {
        let current = this._head;
        let i = 0;
        while (current) {
            if (typeof any === 'function' && any(current.element) === true) {
                return i;
            }
            else if (any === current.element) {
                return i;
            }
            i++;
            current = current.next;
        }
        return -1;
    }

    /**
     * @param{Any} element
     * @return{Object}
     */
    find(any) {
        let current = this._head;
        while (current) {
            if (typeof any === 'function' && any(current.element) === true) {
                return current.element;
            }
            else if (any === current.element) {
                return current.element;
            }
            current = current.next;
        }

        return null;
    }

    /**
     * @param{Number} index: 0 - length
     */
    get(index) {
        if (index >= 0 && index < this._length) {
            let current = this._head, i = 0;
            while (current) {
                if (i++ === index) return current.element;
                current = current.next;
            }
        }
        else {
            console.warn('get: the index is not in the range.');
        }
    }

    /**
     * @param{Number} index: 0 ~ length - 1
     * @param{Any} element
     * @return{Object}
     */
    set(index, element) {
        if (index >= 0 && index < this._length) {
            let current = this._head, i = 0;
            while (current) {
                if (i++ === index) {
                    current.element = element;
                    return this;
                }
                current = current.next;
            }
        }
        else {
            console.warn('get: the index is not in the range.');
        }
        return this;
    }

    /**
     * @return{Number}
     */
    get length() {
        return this._length;
    }

    /**
     * @return{Number}
     */
    size() {
        return this._length;
    }
}

module && (module.exports = LinkedList);

