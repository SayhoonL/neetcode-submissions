class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let arr = []
        for(let i = 0; i < position.length; i++){
            let pos = position[i]
            let spe = speed[i]
            arr.push([pos,spe])
        }
        arr.sort((a,b) => a[0] - b[0])
        let hour = 0
        let count = 0
        while(arr.length > 0){
            let [pos,spe] = arr.pop()
            if(hour < (target - pos)/spe){
                hour = (target - pos)/spe
                count++
            }
            console.log(hour)

        }

        return count
    }
}
