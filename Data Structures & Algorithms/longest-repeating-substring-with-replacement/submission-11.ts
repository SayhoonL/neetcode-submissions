class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let l = 0
        let r = 0
        let result = 0
        let map = new Map()
        let highFreq = 0
        while(r < s.length){
            map.set(s[r], (map.get(s[r]) || 0) + 1)
            highFreq = Math.max(highFreq, map.get(s[r]))
            while((r - l + 1) - highFreq > k){
                map.set(s[l], (map.get(s[l]) - 1))
                l++
            }
            result = Math.max(r - l + 1, result)
            r++
        }

        return result
    }
}
