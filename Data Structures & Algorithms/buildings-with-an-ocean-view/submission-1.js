class Solution {
    /**
     * @param {number[]} heights
     * @return {number[]}
     */
    findBuildings(heights) {
        let result = []
        let max = 0
        for(let i = heights.length - 1; i >= 0; i--){
            if(heights[i] > max){
                result.push(i)
            }
            max = Math.max(max, heights[i])
        }

        return result.reverse()
    }
}
