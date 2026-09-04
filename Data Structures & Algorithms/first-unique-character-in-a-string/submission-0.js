class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    firstUniqChar(s) {
        let map = new Map()
        let store = ""
        for(let i = 0; i < s.length; i++){
            map.set(s[i], (map.get(s[i]) || 0) + 1)
        }
        console.log(map)
        for(let [key,value] of map.entries()){
            if(value === 1){
                store = key
                break;
            }
        }
        for(let i = 0; i < s.length; i++){
            if(s[i] === store){
                return i
            }
        } 
        return -1
    }
}
