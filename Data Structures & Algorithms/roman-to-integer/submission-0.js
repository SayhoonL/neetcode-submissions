class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s) {

        let key = {
            "I" : 1,
            "V" : 5,
            "X" : 10,
            "L" : 50,
            "C" : 100,
            "D" : 500,
            "M" : 1000,
        }
        let num = 0
        for(let i = 0; i < s.length; i++){
            if(key[s[i]] >= key[s[i + 1]]){
                num+= key[s[i]]
            }
            else if(key[s[i]] < key[s[i + 1]]){
                num-= key[s[i]]
            }
            else{
                num += key[s[i]]
            }
        }

        return num
    }
}
