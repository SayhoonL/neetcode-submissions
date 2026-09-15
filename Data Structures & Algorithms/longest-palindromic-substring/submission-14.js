class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let maxLength = 0
        let string = ""
        if(s.length === 1) return s[0]
        for(let i = 0; i < s.length; i++){
            let l = i;
            let r = i + 1
            while(l >= 0 && r < s.length && s[l] === s[r]){
                if(r - l + 1 > maxLength){
                    maxLength = r - l + 1
                    string = s.slice(l,r + 1)
                }
                l--
                r++
            }
        }

        for(let i = 0; i < s.length; i++){
            let l = i;
            let r = i
            while(l >= 0 && r < s.length && s[l] === s[r]){
                if(r - l + 1 > maxLength){
                    maxLength = r - l + 1
                    string = s.slice(l,r + 1)
                }
                l--
                r++
            }
        }

        return string
    }
}
