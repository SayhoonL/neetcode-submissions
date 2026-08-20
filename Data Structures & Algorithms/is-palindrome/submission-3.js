class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isValid(char){
            if(char >= 'A' && char <= 'Z' ){
                return true
            }
            else if(char >= 'a' && char <= 'z' ){
                return true
            }
            else if(char >= '0' && char <= '9' ){
                return true
            }
            return false
        }
        let left = 0
        let right = s.length - 1
        while(left < right){
            while(left < right && !isValid(s[left])){
                left++
            }
            while(left < right && !isValid(s[right])){
                right--
            }
            if(s[left].toLowerCase() !== s[right].toLowerCase()){
                return false
            }
            left++
            right--
        }
        return true
    }
}
