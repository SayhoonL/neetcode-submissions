class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0
        let stack = []
        for(let i = 0; i < heights.length; i++){
            while(stack.length > 0 && heights[stack.at(-1)] > heights[i]){
                let prev = stack.pop()
                maxArea = Math.max(heights[prev] * (i - (stack.at(-1) + 1 || 0)), maxArea)
            }
            stack.push(i)
        }
        while(stack.length > 0){
            let prev = stack.pop()
            maxArea = Math.max(heights[prev] * (heights.length - (stack.at(-1) + 1 || 0)), maxArea)  
        }
        return maxArea
    }
}
