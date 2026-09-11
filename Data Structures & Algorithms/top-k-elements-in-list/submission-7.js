class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()

        for(let num of nums){
            if(!map.has(num)){
                map.set(num,0)
            }
            map.set(num,map.get(num) + 1)
        }

        let heap = new MaxPriorityQueue(x => x[1])

        for(let [key,value] of map.entries()){
            heap.enqueue([key,value])
        }
        const result = []
        for(let i = 0; i < k; i++){
            let [key,value] = heap.dequeue()
            result.push(key)
        }
        return result
    }
}
