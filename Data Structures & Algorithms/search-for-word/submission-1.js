class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        function backTrack(r,c,index){
            if(index === word.length) return true
            if(r >= board.length || r < 0) return false
            if(c >= board[0].length || c < 0) return false
            if(board[r][c] !== word[index]) return false
            board[r][c] = "#" 
            let found = backTrack(r+1,c,index + 1) ||
            backTrack(r - 1,c,index + 1) ||
            backTrack(r,c + 1,index + 1) ||
            backTrack(r,c - 1,index + 1)     
            board[r][c] = word[index]
            return found
        }
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[0].length; j++){
                if(word[0] === board[i][j] && backTrack(i,j,0)){
                    return true
                }
            }
        }
        return false
    }
}
