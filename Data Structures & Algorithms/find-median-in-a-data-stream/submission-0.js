class MedianFinder {
    constructor() {
        this.left = new MaxPriorityQueue()
        this.right = new MinPriorityQueue()
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.left.enqueue(num)
        this.right.enqueue(this.left.dequeue())
        if(this.left.size() < this.right.size()){
            return this.left.enqueue(this.right.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.left.size() > this.right.size()){
            return this.left.front()
        }
        else{
            return (this.right.front() + this.left.front()) / 2
        }
    }
}
