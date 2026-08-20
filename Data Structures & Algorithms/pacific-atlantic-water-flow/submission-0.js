class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let pacific = new Set()
        let atlantic = new Set()
        let res = []
        function pacificTest(r,c,val){
            if(r >= heights.length || r < 0) return
            if(c >= heights[0].length || c < 0) return
            if(pacific.has(`${r},${c}`)) return
            if(heights[r][c] >= val){
                pacific.add(`${r},${c}`)
                pacificTest(r + 1,c,heights[r][c])
                pacificTest(r - 1,c,heights[r][c])
                pacificTest(r,c + 1,heights[r][c])
                pacificTest(r,c - 1,heights[r][c])
            } 
            return
        }
        function atlanticTest(r,c,val){
            if(r >= heights.length || r < 0) return
            if(c >= heights[0].length || c < 0) return
            if(atlantic.has(`${r},${c}`)) return
            if(heights[r][c] >= val){
                atlantic.add(`${r},${c}`)
                atlanticTest(r + 1,c,heights[r][c])
                atlanticTest(r - 1,c,heights[r][c])
                atlanticTest(r,c + 1,heights[r][c])
                atlanticTest(r,c - 1,heights[r][c])
            } 
            return
        }
        for(let i = 0; i < heights.length; i++){
            for(let j = 0; j < heights[0].length; j++){
                if(i === 0 || j === 0){
                    pacificTest(i,j,-Infinity)
                }
                if(i === heights.length - 1 || j === heights[0].length - 1){
                    atlanticTest(i,j, -Infinity)
                }
            }
        }
        for(let i = 0; i < heights.length; i++){
            for(let j = 0; j < heights[0].length; j++){
                if(pacific.has(`${i},${j}`) && atlantic.has(`${i},${j}`)){
                    res.push([i,j])
                }
            }
        }
        return res
    }
}
