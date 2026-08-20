class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = Array.from({ length : temperatures.length}).fill(0)
        let stack = []
        for(let i = 0; i < temperatures.length; i++){
            while(stack.length > 0 && temperatures[stack[stack.length - 1]] < temperatures[i]){
                let index = stack.pop()
                result[index] = i - index
            }
            stack.push(i)
        }

        return result
    }
}
