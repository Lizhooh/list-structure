
class Queue extends Object {

    constructor(arr) {
        super();

        this._list = [];

        Array.isArray(arr) && arr.forEach(i => this.push(i));
    }

    get length() {
        return this._list.length;
    }

    /**
     * @return{Number}
     */
    size() {
        return this._list.length;
    }

    /**
     * @return{String}
     */
    toString() {
        return this._list.toString();
    }

    /**
     * @return{Array}
     */
    toArray() {
        return this._list.slice();
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
        return this._list.shift();
    }

    /**
     * @return{Any}
     */
    front() {
        return this._list[0];
    }

    /**
     * @return{Any}
     */
    back() {
        return this._list[this._list.length - 1];
    }

    /**
     * @return{Boolean}
     */
    isEmpty() {
        return this.length === 0;
    }

    /**
     * @param{Function} callback
     * @return{Object}
     */
    forEach(cb) {
        if (typeof cb === 'function') {
            this._list.forEach((item, index) => cb(item, index));
        }
        return this;
    }

    /**
     * @param{Array} arr
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
     * @return{Object}
     */
    clear() {
        this._list = [];
        return this;
    }

    /**
     * @param{Any}
     * @return{Boolean}
     */
    has(any) {
        for (let i = 0, len = this._list.length; i < len; i++) {
            if (typeof any === 'function' && any(this._list[i]) === true) {
                return true;
            }
            else if (any === this._list[i]) {
                return true;
            }
        }
        return false;
    }
}

if (typeof module !== undefined) {
    module.exports = Queue;
}
