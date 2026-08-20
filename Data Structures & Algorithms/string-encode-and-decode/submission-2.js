class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let s = ""
        for(let str of strs){
            s += str + "~"
        }
        console.log(s)
        return s
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let s = []
        let temp = ""
        for(let char of str){
            if(char === "~"){
                s.push(temp)
                temp = ""
            }
            else{
                temp += char
            }
        }
        console.log(s)
        return s
    }
}
