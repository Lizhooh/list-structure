
class Stack extends Object {

    constructor(arr) {
        super();
        this._list = [];

        Array.isArray(arr) && arr.forEach(i => this.push(i));
    }

    /**
     * @param{Any} element:
     * @return{Object}
     */
    push(element) {
        this._list.push(element);
        return this;
    }

    /**
     * @return{Any}
     */
    pop() {
        return this._list.pop();
    }

    /**
     * @return{Any}
     */
    peek() {
        if (this._list.length < 1) return null;
        return this._list[this._list.length - 1];
    }

    /**
     * @return{Object}
     */
    clear() {
        this._list = [];
        return this;
    }

    /**
     * @return{Boolean}
     */
    isEmpty() {
        return this._list.length === 0;
    }

    /**
     * @param{Array}
     * @return{Object}
     */
    from(arr) {
        if (Array.isArray(arr)) {
            arr.forEach(i => this.push(i));
        }
        else {
            console.warn('from: the arr is not a array.');
        }
        return this;
    }

    /**
     * @param{Any}
     * @return{Boolean}
     */
    has(any) {
        if (typeof any === 'function') {
            return this._list.some(i => any(i));
        }
        else {
            return this._list.some(i => any === i);
        }
    }

    /**
     * @param{Function} callback: item, index
     */
    forEach(cb) {
        if (typeof cb === 'function') {
            let i = this._list.length;
            while (i--) {
                cb(this._list[i], i);
            }
        }
    }

    /**
     * @return{Array}
     */
    toArray() {
        return this._list.slice();
    }

    /**
     * @return{String}
     */
    toString() {
        return this._list.toString();
    }

    get length() {
        return this._list.length;
    }

    /**
     * @return{Number}
     */
    size() {
        return this.length;
    }
}

module && (module.exports = Stack);