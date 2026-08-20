class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = []
        let sub = Array.from(nums.length).fill(false)

        function dfs(path){
            if(path.length === nums.length){
                result.push([...path])
                return
            }
            if(path.length >= nums.length) return
            for(let i = 0; i < nums.length; i++){
                if(sub[i] === true){
                    continue
                }
                sub[i] = true
                path.push(nums[i])
                dfs(path)
                path.pop()
                sub[i] = false
            }
        }
        dfs([])
        return result
    }
}
