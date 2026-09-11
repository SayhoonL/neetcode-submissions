class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set()
        let maxCount = 0
        for(let i = 0; i < nums.length; i++){
            set.add(nums[i])
        }
        for(let i = 0; i < nums.length; i++){
            let count = 0
            if(!set.has(nums[i] - 1)){
                let num = nums[i]
                while(set.has(num)){
                    num++
                    count++
                }
            }
            maxCount = Math.max(count, maxCount)

        }

        return maxCount


    }
}
