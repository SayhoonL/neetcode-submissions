class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        for(let i = 0; i < board.length; i++){
            dfs(i,0)
            dfs(i,board[0].length - 1)
        }
        for(let j = 0; j < board[0].length; j++){
            dfs(0,j)
            dfs(board.length - 1, j)
        }

        function dfs(r,c){
            if(r < 0 || r >= board.length) return
            if(c < 0 || c >= board[0].length) return
            if(board[r][c] === "X" || board[r][c] === "T") return
            board[r][c] = "T"
            dfs(r + 1,c)
            dfs(r -1,c)
            dfs(r,c + 1)
            dfs(r,c - 1)
        }


        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[0].length; j++){
                if(board[i][j] === "O"){
                    board[i][j] = "X"
                }
                if(board[i][j] === "T"){
                    board[i][j] = "O"
                }
            }
        }
    }
}
