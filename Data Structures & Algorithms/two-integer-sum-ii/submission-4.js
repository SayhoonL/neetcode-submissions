class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0
        let r = numbers.length - 1
        while(l < r){
            let diff = target - numbers[l] - numbers[r]

            if(diff < 0){
                r--
            }
            else if(diff > 0){
                l++
            }
            else{
                return [l + 1, r + 1]
            }
        }
    }
}
