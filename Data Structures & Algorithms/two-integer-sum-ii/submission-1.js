class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let map = new Map()
        for(let i = 0; i < numbers.length; i++){
            let complement = target - numbers[i]
            if(map.has(complement)){
                return [map.get(complement) + 1,i + 1]
            }
            else{
                map.set(numbers[i],i)
            }
        }
        return [0,0]
    }
}
