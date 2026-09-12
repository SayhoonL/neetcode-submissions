class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        let map = new Map()
        for(let i = 0; i < hand.length; i++){
            map.set(hand[i], (map.get(hand[i]) || 0) + 1)
        }

        let sorted = [...map.keys()].sort((a,b) => a - b)
        for(let i = 0; i < sorted.length; i++){
            let start = sorted[i]
            let freq = map.get(start)

            for(let j = start; j < start + groupSize; j++){
                if((map.get(j) || 0) < freq){
                    return false
                }
                map.set(j,map.get(j) - freq)
            }
        }
        return true
    }
}
