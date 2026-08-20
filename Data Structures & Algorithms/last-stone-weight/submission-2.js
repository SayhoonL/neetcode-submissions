class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxHeap = new MaxPriorityQueue()
        for(let stone of stones){
            maxHeap.enqueue(stone)
        }
        console.log(maxHeap.size())
        while(maxHeap.size() > 1){
            let first = maxHeap.dequeue()
            let second = maxHeap.dequeue()
            let left = first - second
            console.log(left)
            if(left !== 0){
                maxHeap.enqueue(left)
            }
        }
        return maxHeap.size() === 0 ? 0 : maxHeap.front()

    }
}
