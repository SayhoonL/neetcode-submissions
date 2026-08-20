class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1
        piles.sort((a,b) => b - a)
        let right = piles[0]

        while(left < right){
            let speed = Math.floor((left + right) / 2)
            let hour = 0
            for(let i = 0; i < piles.length; i++){
                hour += Math.ceil(piles[i]/speed)
            }
            if(hour > h){
                left = speed + 1
            }
            else if (hour <= h){
                right = speed 
            }
        }

        return left
    }
}
