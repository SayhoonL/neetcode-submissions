class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1
        let right = Math.max(...piles)

        while(left < right){
            let speed = left + Math.floor((right - left)/2)
            let total = 0
            for(let pile of piles){
                total += Math.ceil(pile / speed)
            }
            if(total > h){
                left = speed + 1
            }
            else{
                right = speed
            }
        }

        return right
    }
}
