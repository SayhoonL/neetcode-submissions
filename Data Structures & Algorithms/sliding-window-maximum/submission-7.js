class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let l = 0
        let queue = []
        let result = []
        for(let i = 0; i < nums.length; i++){
            while(queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]){
                queue.pop()
            }
            queue.push(i)

            while(queue[0] < l){
                queue.shift()
            }

            if(i - l + 1=== k){
                result.push(nums[queue[0]])
                l++
            }

        }

        return result
    }
}
