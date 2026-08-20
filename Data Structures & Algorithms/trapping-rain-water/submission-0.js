class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let maxLeft = 0
        let maxRight = 0
        let rightHeight = Array(height.length).fill(0)
        let leftHeight = Array(height.length).fill(0)
        let result = 0
        for(let i = 0; i < height.length; i++){
            maxLeft = Math.max(height[i], maxLeft)
            leftHeight[i] = maxLeft 
        }
        for(let i = height.length - 1; i >= 0; i--){
            maxRight = Math.max(height[i], maxRight)
            rightHeight[i] = maxRight
        }
        for(let i = 0; i < height.length; i++){
            result += Math.min(rightHeight[i],leftHeight[i]) - height[i]

        }
        return result
    }
}
