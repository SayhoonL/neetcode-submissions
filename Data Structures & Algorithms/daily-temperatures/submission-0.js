class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = Array.from({length:temperatures.length}).fill(0)
        for(let i = 0; i < temperatures.length; i++){
            for(let j = i; j < temperatures.length; j++){
                if(temperatures[j] > temperatures[i]){
                    result[i] = j - i
                    break
                }
            }
        }

        return result
    }
}
