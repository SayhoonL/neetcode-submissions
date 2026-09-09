class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = Math.max(...piles)
        let r = max
        let l = 1
        while(r > l){
            let hours = 0
            let m = Math.floor((r + l) / 2)
            for(let i = 0; i < piles.length; i++){
                hours += Math.ceil(piles[i]/m)
            }
            if(hours > h){
                l = m + 1
            }
            else if(hours < h){
                r = m
            }
            else{
                r = m
            }
        }

        return l

    }
}
