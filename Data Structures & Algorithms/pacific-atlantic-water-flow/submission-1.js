class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let atlanticGrid = Array.from({length : heights.length}, () => new Array(heights[0].length).fill(0))
        let pacificGrid = Array.from({length : heights.length}, () => new Array(heights[0].length).fill(0))
        let result = []
        for(let i = 0; i < heights.length; i++){
            pacific(i,0,-Infinity)
            atlantic(i, heights[0].length - 1, -Infinity)
        }
        for(let i = 0; i < heights[0].length; i++){
            pacific(0,i,-Infinity)
            atlantic(heights.length - 1, i, -Infinity)
        }
        
        function pacific(r,c,prev){
            if(r < 0 || r >= heights.length) return
            if(c < 0 || c >= heights[0].length) return
            if(pacificGrid[r][c] === 1) return
            if(heights[r][c] < prev) return
            pacificGrid[r][c] = 1
            pacific(r + 1,c, heights[r][c])
            pacific(r - 1,c, heights[r][c])
            pacific(r,c + 1, heights[r][c])
            pacific(r,c - 1, heights[r][c])
        }

        function atlantic(r,c,prev){
            if(r < 0 || r >= heights.length) return
            if(c < 0 || c >= heights[0].length) return
            if(atlanticGrid[r][c] === 1) return
            if(heights[r][c] < prev) return
            atlanticGrid[r][c] = 1

            atlantic(r + 1,c, heights[r][c])
            atlantic(r - 1,c, heights[r][c])
            atlantic(r,c + 1, heights[r][c])
            atlantic(r,c - 1, heights[r][c])
        }

        for(let i = 0; i < heights.length; i++){
            for(let j = 0; j < heights[0].length; j++){
                if(atlanticGrid[i][j] === 1 && pacificGrid[i][j] === 1){
                    result.push([i,j])
                }
            }
        }

        console.log(atlanticGrid)
        console.log(pacificGrid)

        return result
    }
}
