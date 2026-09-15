class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n === 1) return 1
        if(n === 2) return 2
        
        let two = 1
        let one = 2

        for(let i = 3; i <= n; i++){
            let curr = one + two
            two = one
            one = curr
        }

        return one
    }
}
