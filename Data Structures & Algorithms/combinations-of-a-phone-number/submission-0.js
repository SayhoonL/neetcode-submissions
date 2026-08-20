class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(digits === "") return []
        let result = []
        let subset = []
        let phone = {
            "2" : "abc",
            "3" : "def",
            "4" : "ghi",
            "5" : "jkl",
            "6" : "mno",
            "7" : "pqrs",
            "8" : "tuv",
            "9" : "wxyz"
        }

        function dfs(index){
            if(subset.length === digits.length){
                result.push([...subset].join(""))
                return
            }
            let letters = phone[digits[index]]
            for(let letter of letters){
                subset.push(letter)
                dfs(index + 1)
                subset.pop()
            }
        }
        dfs(0)
        return result
    }
}
