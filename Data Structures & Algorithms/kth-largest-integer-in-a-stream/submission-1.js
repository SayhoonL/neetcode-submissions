class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.minHeap = new MinPriorityQueue()
        for(let num of nums){
            this.minHeap.enqueue(num)
        }
        this.k = k
        while(this.minHeap.size() > k){
            this.minHeap.dequeue()
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.minHeap.enqueue(val)
        while(this.minHeap.size() > this.k){
            this.minHeap.dequeue()
        }
        let result = this.minHeap.dequeue()
        this.minHeap.enqueue(result)
        return result
    }
}
