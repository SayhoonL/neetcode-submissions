class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0
        let set = new Set()
        let minLength = 0
        for(let i = 0; i < s.length; i++){
            while(set.has(s[i])){
                set.delete(s[l])
                l++
            }
            set.add(s[i])
            minLength = Math.max(minLength, i - l + 1)
        }

        return minLength
    }
}
