class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let sArr = new Array(26).fill(0)
        let tArr = new Array(26).fill(0)
        for(let i = 0; i < s.length; i++){
            let index = s[i].charCodeAt(0) - "a".charCodeAt(0)
            sArr[index]++
        }
        for(let i = 0; i  < t.length; i++){
            let index = t[i].charCodeAt(0) - "a".charCodeAt(0)
            tArr[index]++
        }
        for(let i = 0; i < sArr.length; i++){
            if(sArr[i] !== tArr[i]){
                return false
            }
        }
        return true

    }
}
