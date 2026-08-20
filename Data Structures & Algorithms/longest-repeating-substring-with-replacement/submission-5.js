class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map()
        let maxFreq = 0
        let l = 0
        let res = 0
        for(let i = 0; i < s.length; i++){
            map.set(s[i],(map.get(s[i]) || 0) + 1)
            maxFreq = Math.max(maxFreq, map.get(s[i]))
            while(i - l + 1 - maxFreq > k){
                map.set(s[l], map.get(s[l]) - 1)
                l++
            }
            res = Math.max(res, i - l + 1)

        }
        return res
    }
}
