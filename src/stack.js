class Stack extends Object {

    constructor(arr) {
        super();
        this._list = [];

        this.from(arr);
    }

    /**
     * @return{Array}
     */
    toArray() {
        return this._list.slice();
    }

    /**
     * @return{Number}
     */
    size() {
        return this._list.length;
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
        if (this.size() < 1) return null;
        return this._list[this.size() - 1];
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
        return this.size() === 0;
    }

    /**
     * @param{Array}
     * @return{Object}
     */
    from(arr) {
        if (Array.isArray(arr)) {
            arr.forEach(i => this.push(i));
        }
        return this;
    }

    /**
     * @param{Function} cb
     * @return{Boolean}
     */
    has(cb) {
        if (typeof cb === 'function') {
            for (let i = 0, len = this.size(); i < len; i++) {
                if (!!cb(this._list[i])) return true;
            }
        }
        return false;
    }

    /**
     * @param{Function} callback: item, index
     */
    forEach(cb) {
        if (typeof cb === 'function') {
            let i = this.size();
            while (i--) {
                cb(this._list[i], i);
            }
        }
    }
}

module.exports = Stack;