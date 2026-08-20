class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]){
            this.minStack.push(val)
        }
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop() {
        let deleted = this.stack.pop()
        if(deleted === this.minStack[this.minStack.length - 1]){
            this.minStack.pop()
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
