class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let maxLength = 0
        let ans = ""
        for(let i = 0; i < s.length; i++){
            let l = i
            let r = i
            while(l >= 0 && r < s.length){
                if(s[l] === s[r]){
                    if(maxLength < (r - l + 1)){
                        console.log(l,r)
                        maxLength = r - l + 1
                        ans = s.slice(l, r + 1)
                    }
                    l--
                    r++
                }
                else{
                    break
                }
            }
        }
        for(let i = 0; i < s.length; i++){
            let l = i
            let r = i + 1
            while(l >= 0 && r < s.length){
                if(s[l] === s[r]){
                    if(maxLength < (r - l + 1)){
                        maxLength = r - l + 1
                        ans = s.slice(l, r + 1)
                    }
                    l--
                    r++
                }
                else{
                    break
                }
            }
        }
        return ans
    }
}
