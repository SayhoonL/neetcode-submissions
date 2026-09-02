class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0
        for(let i = 0; i < s.length; i++){
            count++
            let l = i
            let r = i + 1
            while(l >= 0 && r < s.length && s[l] === s[r]){
                count++
                l--
                r++
            }
        }
        for(let i = 0; i < s.length; i++){
            let l = i - 1
            let r = i + 1
            while(l >= 0 && r < s.length && s[l] === s[r]){
                count++
                l--
                r++
            }
        }
        return count
    }
}
