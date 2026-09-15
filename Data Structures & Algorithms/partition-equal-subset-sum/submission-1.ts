class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {
        let total = 0
        for(let num of nums){
            total += num
        }
        if(total % 2 === 1){
            return false
        }
        let target = total/2

        let sublet = []
        function dfs(index : number,total : number){
            if(index === nums.length){
                return false
            }
            if(target === total) return true
            sublet.push(nums[index])
            if(dfs(index + 1, total + nums[index])) return true
            sublet.pop()
            if(dfs(index + 1, total)) return true            
        }
        if(dfs(0,0)) return true

        return false
    }
}
