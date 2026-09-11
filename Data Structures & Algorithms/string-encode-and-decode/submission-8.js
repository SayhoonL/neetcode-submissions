class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = ""
        for(let str of strs){
            result+= str.length
            result+= "#"
            result+= str
        }
        console.log(result)
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let i = 0
        while(i < str.length){
            let j = i
            while(str[j] !== "#"){
                j++
            }
            let length = Number(str.slice(i,j))
            result.push(str.slice(j + 1, j + 1 + length))
            i = j + 1 + length
        }

        return result
    }
}
