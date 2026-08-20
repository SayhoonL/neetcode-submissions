class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        let result = []

        for(let i = 0; i < strs.length; i++){
            let sorted = strs[i].split("").sort().join("")
            if(!map.has(sorted)){
                map.set(sorted,[])
            }
            map.get(sorted).push(strs[i])
        }
        for(let value of map.values()){
            result.push(value)
        }
        return result
    }
}
