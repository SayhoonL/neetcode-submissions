class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let map = new Map()
        for(let i = 0; i < position.length; i++){
            map.set(position[i],speed[i])
        }
        let sorted = [...position].sort((a,b) => b - a)
        let time = 0
        let result = 0
        console.log(map)
        for(let i = 0; i < sorted.length; i++){
            let spd = map.get(sorted[i])
            if(time < (target - sorted[i])/spd){
                result++
                time = (target - sorted[i])/spd
            }
        }
        return result
    }
}
