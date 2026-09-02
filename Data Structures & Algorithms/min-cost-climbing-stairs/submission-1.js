class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let dp = []
        let two = cost[0]
        let one = cost[1]
        for(let i = 2; i < cost.length; i++){
            let current = Math.min(one, two) + cost[i]
            two = one
            one = current
        }
        return Math.min(one, two)
    }
}
