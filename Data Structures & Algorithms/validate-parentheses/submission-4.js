class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let obj = {
            "[" : "]",
            "{" : "}",
            "(" : ")",
        }
        let stack = []
        for(let char of s){
            if(obj[char] !== undefined){
                stack.push(obj[char])
            }
            else{
                if(char !== stack[stack.length - 1]){
                    return false
                }
                stack.pop()
            }
        }

        return stack.length === 0
    }
}
