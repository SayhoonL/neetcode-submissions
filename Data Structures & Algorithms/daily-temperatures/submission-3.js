class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = []
        let result = new Array(temperatures.length).fill(0)
        for(let i = 0; i < temperatures.length; i++){
            while(stack.length > 0 && temperatures[stack.at(-1)] < temperatures[i]){
                let temp = stack.pop()
                result[temp] = i - temp

            }
            stack.push(i)
        }

        return result
    }
}
