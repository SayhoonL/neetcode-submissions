class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let l = 0
        let result = []
        let heap = new MaxPriorityQueue()
        let map = new Map()
        for(let i = 0; i < nums.length; i++){
            heap.enqueue(nums[i])
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
            if(i >= k - 1){
                while(!map.has(heap.front())){
                    heap.dequeue()
                }
                result.push(heap.front())
                map.set(nums[l], (map.get(nums[l]) - 1))
                if(map.get(nums[l]) === 0){
                    map.delete(nums[l])
                }
                l++
            }

        }
        return result
    }
}
