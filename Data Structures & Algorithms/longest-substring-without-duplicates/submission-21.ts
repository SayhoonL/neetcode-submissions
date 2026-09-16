class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if(s.length === 0) return 0
        let set = new Set()
        let l = 0
        let r = 0
        let result = 0
        while(r < s.length){
            if(set.has(s[r])){
                while(set.has(s[r])){
                    set.delete(s[l])
                    l++
                }
            }
            result = Math.max(r - l + 1, result)
            set.add(s[r])
            r++
        }

        return result
    }
}
