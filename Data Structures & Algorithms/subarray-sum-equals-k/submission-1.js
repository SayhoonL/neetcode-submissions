class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let map = new Map()
        let sum = 0
        map.set(0,1)
        let count = 0
        for(let num of nums){
            sum += num
            if(map.has(sum - k)){
                count += map.get(sum - k)
            }
            map.set(sum, (map.get(sum) || 0)  +1)
        }

        return count
    }
}
