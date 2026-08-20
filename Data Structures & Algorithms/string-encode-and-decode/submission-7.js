class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let s = ""
        for(let str of strs){
            s += str.length + "#" + str
        }
        return s
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let answer = []
        let j = 0
        let i = 0
        while(i < str.length){
            while(str[j] !== "#"){
                j++
            }
            let count = Number(str.slice(i,j))
            i = j + 1
            let word = str.slice(i,i + count)
            answer.push(word)
            i = i + count
            j = i
        }


        return answer
    }
}
