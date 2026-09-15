class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let l = 0
        let r = height.length - 1
        let area = 0
        let maxRight = 0
        let maxLeft = 0
        while(l < r){
            if(height[l] < height[r]){
                area += Math.max(maxLeft - height[l], 0)
                maxLeft = Math.max(maxLeft, height[l])
                l++
            }
            else{
                area += Math.max(maxRight - height[r], 0)
                maxRight = Math.max(maxRight, height[r])
                r--
            }
        }
        return area
    }
}
