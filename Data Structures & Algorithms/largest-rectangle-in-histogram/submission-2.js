class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = []
        let maxArea = 0
        for(let i = 0; i < heights.length; i++){
            while(stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]){
                let index = stack.pop()
                let height = heights[index]
                let width = stack.length === 0 ? i : i - 1 - stack[stack.length - 1]

                maxArea = Math.max(maxArea, width * height)
            }
            stack.push(i)
        }

        while(stack.length > 0){
                let index = stack.pop()
                let height = heights[index]
                let width = stack.length === 0 ? heights.length : heights.length - stack[stack.length - 1] - 1
                maxArea = Math.max(maxArea, height * width)            
        }

        return maxArea
    }
}
