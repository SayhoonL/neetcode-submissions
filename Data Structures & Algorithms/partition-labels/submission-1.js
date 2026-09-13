class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        let map = new Map()
        for(let i = 0; i < S.length; i++){
            map.set(S[i],(map.get(S[i]) || 0) + 1)
        }
        let result = []
        let count = 0
        let set = new Set()
        for(let i = 0; i < S.length; i++){
            count++
            set.add(S[i])
            map.set(S[i], map.get(S[i]) - 1)
            if(map.get(S[i]) === 0){
                set.delete(S[i])
            }
            if(set.size === 0){
                result.push(count)
                count = 0
            }
        }

        return result
    }
}
