class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        let answer = []
        for(let str of strs){
            let temp = str.split("").sort().join("")
            if(map.has(temp)){
                let arr = map.get(temp)
                arr.push(str)
                map.set(temp,arr)
            }
            else{
                let arr = []
                arr.push(str)
                map.set(temp,arr)
            }
        }
        for(let [key,value] of map.entries()){
            answer.push(value)
        }
        return answer
    }
}
