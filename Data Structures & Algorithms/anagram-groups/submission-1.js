class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        let answer = []
        for(let str of strs){
            let count = new Array(26).fill(0)
            for(let char of str){
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            const key = count.join(',')
            if(!map.has(key)){
                map.set(key,[])
            }
            map.get(key).push(str)
        }
        for(let [value,key] of map.entries()){
            answer.push(key)
        }
        return answer
    }
}
