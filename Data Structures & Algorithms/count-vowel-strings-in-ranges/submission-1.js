class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        let set = new Set(["a","e","o","u","i"])
        let arr = new Array(words.length + 1).fill(0)

        for(let i = 1; i < words.length + 1; i++){
            let word = words[i - 1]
            if(set.has(word[0]) && set.has(word[word.length - 1])){
                arr[i] = arr[i - 1] + 1
            }
            else{
                arr[i] = arr[i - 1]             
            }
        }
        let result = []
        for(let [start,end] of queries){
            let num = arr[end + 1] - arr[start]
            result.push(num)
        }

        return result
    }
}
