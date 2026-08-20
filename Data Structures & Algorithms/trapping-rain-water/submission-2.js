class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = 0
        let rightMax = 0
        let left = 0
        let right = height.length - 1
        let result = 0
        while(left < right){
            leftMax = Math.max(leftMax, height[left])
            rightMax = Math.max(rightMax,height[right])
            if(leftMax > rightMax){
                result += Math.min(leftMax,rightMax) - height[right]
                right--
            }
            else{
                result += Math.min(leftMax,rightMax) - height[left]
                left++
            }
        }
        return result
    }
}
