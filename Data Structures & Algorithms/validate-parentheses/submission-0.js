class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = {
            '(' : ')',
            '{' : '}',
            '[' : ']'
        }
        let stack = []

        for(let char of s){
            if(char in map){
                stack.push(map[char])
            }
            else{
                if(stack.pop() !== char){
                    return false
                }
            }
        }
        return stack.length === 0
    }
}
