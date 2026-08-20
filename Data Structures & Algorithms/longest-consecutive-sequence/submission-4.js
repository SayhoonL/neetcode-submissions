class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0
        let set = new Set(nums)
        let answer = 0
        for(let i = 0; i < nums.length; i++){
            if(!set.has(nums[i] - 1)){
                let current = nums[i]
                let count = 1
                while(set.has(current + 1)){
                    current++
                    count++
                }
                answer = Math.max(answer,count)
            }
        }
        return answer
    }
}
