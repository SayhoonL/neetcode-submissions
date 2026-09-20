class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let count = 0
        let l = 0
        let maxLength = 0
        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 1){
                count++
            }
            while(i - l + 1 - count > k){
                if(nums[l] === 1){
                    count--
                }
                l++
            }
            maxLength = Math.max(maxLength, i - l + 1)
        }

        return maxLength
    }
}
