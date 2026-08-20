class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map()
        let maxFreq = 0
        let j = 0
        let answer = 0
        for(let i = 0; i < s.length; i++){
            map.set(s[i],(map.get(s[i]) || 0 )+ 1)
            maxFreq = Math.max(maxFreq,map.get(s[i]))
            while(i - j + 1 - maxFreq > k){
                map.set(s[j],map.get(s[j]) - 1)
                j++
            }
            answer = Math.max(answer, i - j + 1)
        }
        return answer
    }
}
