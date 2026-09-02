class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let result = s[0]
        let maxLength = 0
        for(let i = 0; i< s.length; i++){
            let l = i
            let r = i + 1
            while(l >= 0 && r < s.length && s[l] === s[r]){
                if(r - l > maxLength){
                    result = s.slice(l,r + 1)
                    maxLength = r - l
                }
                l--
                r++
            }
        }
        for(let i = 1; i< s.length; i++){
            let l = i - 1
            let r = i + 1
            while(l >= 0 && r < s.length && s[l] === s[r]){
                if(r - l > maxLength){
                    result = s.slice(l,r + 1)
                    maxLength = r - l
                }
                l--
                r++
            }
        }
        return result
    }
}
