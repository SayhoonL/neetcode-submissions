class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let result = 0
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[0].length; j++){
                if(grid[i][j] === 1){
                    result =  Math.max(result, dfs(i,j))
                }
            }
        }

        function dfs(r,c){
            if(r < 0 || r >= grid.length){
                return 0
            }
            if(c < 0 || c >= grid[0].length){
                return 0
            }
            if(grid[r][c] === 0){
                return 0
            }
            grid[r][c] = 0
            return 1 + dfs(r + 1,c) + dfs(r - 1,c) + dfs(r,c + 1) + dfs(r,c - 1)
        }

        return result
    }
}
