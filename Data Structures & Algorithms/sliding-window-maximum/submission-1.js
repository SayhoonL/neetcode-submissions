class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left = 0
        let right = k - 1
        let answer = []
        while(right !== nums.length){
            let max = -Infinity
            for(let i = left; i <= right; i++){ 
                max = Math.max(nums[i], max)
            }
            answer.push(max)
            left++
            right++
        }
        return answer
    }
}
