class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0
        let maxFreq = 0
        let map = new Map()
        let answer = 0
        for(let r = 0; r < s.length; r++){
            map.set(s[r], (map.get(s[r]) || 0) + 1)
            maxFreq = Math.max(map.get(s[r]), maxFreq)
            while(r - l + 1 - maxFreq > k){
                map.set(s[l], map.get(s[l]) - 1)
                l++
            }
            answer = Math.max(r- l +1, answer)
        }
        return answer
    }
}
