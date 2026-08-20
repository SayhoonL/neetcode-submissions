class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = []
        let subset = []
        let set = new Set()
        function dfs(){
            if(subset.length === nums.length){
                result.push([...subset])
                return
            }
            for(let i = 0; i < nums.length; i++){
                if(set.has(nums[i])) continue
                subset.push(nums[i])
                set.add(nums[i])
                dfs()
                subset.pop()
                set.delete(nums[i])
            }
            
        }
        dfs()
        return result

    }
}
