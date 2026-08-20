class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()

        for(let num of nums){
            map.set(num,(map.get(num) || 0) + 1)
        }

        let buckets = Array.from({length : nums.length + 1}, () => [])
        let answer = []
        for(let [num,freq] of map.entries()){
            buckets[freq].push(num)
        }
        for(let i = buckets.length - 1; i > 0; i--){
            if(buckets[i].length > 0){
                for(let bucket of buckets[i]){
                    answer.push(bucket)
                }
            }
            if(answer.length === k){
                return answer
            }
        }

        return answer
    }
}