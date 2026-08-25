class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let result = 0
        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[0].length; j++){
                if(grid[i][j] === "1"){
                    dfs(i,j)
                    result++
                }
            }
        }

        function dfs(r,c){
            if(r >= grid.length || r < 0){
                return
            }
            if(c >= grid[0].length || c < 0){
                return
            }
            if(grid[r][c] === "0"){
                return
            }
            grid[r][c] = "0"
            dfs(r + 1,c)
            dfs(r - 1,c)
            dfs(r,c + 1)
            dfs(r,c - 1)
        }

        return result
    }
}
