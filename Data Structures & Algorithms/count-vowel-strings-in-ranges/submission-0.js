class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        let vowels = new Set(["a","e","i","o","u"])
        let arr = Array(words.length).fill(false)
        let count = 0
        let result = []
        for(let word of words){
            if(vowels.has(word[0]) && vowels.has(word[word.length -1])){
                arr[count] = true
            }
            count++
        }
        for(let [li,ri] of queries){
            let temp = 0
            for(let i = li; i <= ri; i++){
                if(arr[i]){
                    temp++
                }
            }
            result.push(temp)
        }

        return result

    }
}
