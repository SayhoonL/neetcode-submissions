class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let arr = new Array(26).fill(0)
        if(s.length !== t.length) return false
        for(let i = 0; i < s.length; i++){
            let char = s[i].charCodeAt(0) - 97
            arr[char]++
            char = t[i].charCodeAt(0) - 97
            arr[char]--
        }
        for(let num of arr){
            if(num !== 0) return false
        }

        return true
    }
}
