class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let result = []
        let sub = []
        let sorted = candidates.sort((a,b) => a - b)
        function dfs(index,total,prev){
            if(total === target){
                result.push([...sub])
                return
            }
            if(index >= sorted.length || total > target){
                return
            }
            sub.push(candidates[index])
            dfs(index + 1, total + sorted[index],sorted[index])
            sub.pop()
            while(candidates[index] === candidates[index + 1]){
                index++
            }
            dfs(index + 1, total,sorted[index])
        }
        dfs(0,0,-Infinity)

        return result
    }
}
