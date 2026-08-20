class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let speed = 0
        let hours = Infinity
        while(hours > h){
            speed++
            hours = 0
            for(let i = 0; i < piles.length; i++){
                hours += Math.ceil(piles[i] / speed)
            }
        }
        return speed
    }
}
