class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()

        for(let i = 0; i < nums.length; i++){
            if(!map.has(nums[i])){
                map.set(nums[i], 0)
            }
            map.set(nums[i], map.get(nums[i]) + 1)
        }

        let arr = Array.from({length : nums.length + 1}, () => [])

        for(let [key,value] of map.entries()){
            arr[value].push(key)
        }
        let result = []
        let count = 0
        for(let i = arr.length - 1; i >= 0; i--){
            for(let num of arr[i]){
                result.push(num)
                count++
                if(count === k){
                return result
            }
            }

        }
        return result
    }
}
