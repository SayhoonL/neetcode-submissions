class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        let result = []
        for(let str of strs){
            let arr = Array(26).fill(0)
            for(let char of str){
                let index = char.charCodeAt(0) - 'a'.charCodeAt(0)
                arr[index]++
            }
            let key = arr.join("#")
            if(!map.has(key)){
                map.set(key,[])
            }
            map.get(key).push(str)
        }

        for(let value of map.values()){
            result.push(value)
        }
        return result
    }


}
