class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let arr = new Array(triplets[0].length).fill(false)
        for(let triplet of triplets){
            if(triplet[0] > target[0] || triplet[1] > target[1] || triplet[2] > target[2]) continue

            for(let i = 0; i < triplet.length; i++){
                if(triplet[i] === target[i]){
                    arr[i] = true
                }
            }

        }
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === false){
                return false
            }
        }

        return true
    }
}
