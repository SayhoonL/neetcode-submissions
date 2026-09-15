class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0
        let r = s.length - 1
        while(l < r){
            while(l < r && !((s[l] >= "a" && s[l] <= "z") || (s[l] >= "A" && s[l] <= "Z") || (s[l] >= "0" && s[l] <= "9"))){
                l++
            }
            while(l < r && !((s[r] >= "a" && s[r] <= "z") || (s[r] >= "A" && s[r] <= "Z") || (s[r] >= "0" && s[r] <= "9"))){
                r--
            }
            
            if(s[l].toLowerCase() === s[r].toLowerCase()){
                l++
                r--
            }
            else{
                return false
            }
        }

        return true
    }
}
