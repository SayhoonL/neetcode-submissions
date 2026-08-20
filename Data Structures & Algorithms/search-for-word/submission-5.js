class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let flag = false
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                if(board[i][j] === word[0]){
                    dfs(0,i,j)
                }
            }
        }
        function dfs(index,i,j){
            if(i > board.length - 1 || i < 0){
                return
            }
            if(j > board[0].length - 1 || j < 0){
                return
            }
            if(board[i][j] === 0){
                return
            }
            if(word[index] !== board[i][j]){
                return
            }
            if(word.length === index + 1 && word[index] === board[i][j]){
                flag = true
                return
            }
            let temp = board[i][j]
            board[i][j] = 0
            dfs(index + 1, i, j + 1)
            dfs(index + 1, i + 1, j)
            dfs(index + 1, i - 1, j)
            dfs(index + 1, i, j - 1)
            board[i][j] = temp
        }
        return flag

    }
}
