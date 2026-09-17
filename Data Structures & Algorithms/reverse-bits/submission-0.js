class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let result = 0
        for(let i = 0; i < 32; i++){
            let bit = n & 1
            result <<= 1
            result |= bit
            n >>>= 1
        }

        return result >>> 0
    }
}
