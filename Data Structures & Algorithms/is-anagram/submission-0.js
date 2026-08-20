class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        let map = new Map()
        for(let i = 0; i < s.length; i++){
            map.set(s[i],(map.get(s[i]) || 0) + 1)
        }
        for(let i = 0; i < t.length; i++){
            map.set(t[i],(map.get(t[i]) || 0) - 1)
        }
        for(let [key,value] of map.entries()){
            console.log(key)
            if(map.get(key) !== 0){
                return false
            }
        }
        return true
    }
}
