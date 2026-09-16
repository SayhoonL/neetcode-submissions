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
                let height = heights[prev]
                let left = stack.length > 0 ? stack.at(-1) : -1
                let width = i - (left + 1)
                maxArea = Math.max(height * width, maxArea)
            }
            stack.push(i)
        }
        while(stack.length > 0){
            let prev = stack.pop()
            let left = stack.length > 0 ? stack.at(-1) : -1
            let width = heights.length - (left + 1)
            maxArea = Math.max(heights[prev] * width, maxArea)  
        }
        return maxArea
    }
}
