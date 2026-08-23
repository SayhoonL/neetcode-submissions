class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i++) {
            const set = new Set()
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] !== "." &&set.has(board[i][j])) return false
                set.add(board[i][j])
            }
        }
        console.log("error")
        for (let i = 0; i < board.length; i++) {
            const set = new Set()
            for (let j = 0; j < board[0].length; j++) {
                if (board[j][i] !== "." &&set.has(board[j][i])) return false
                set.add(board[j][i])
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const set = new Set()
                for (let k = 0; k < 3; k++) {
                    for (let l = 0; l < 3; l++) {
                        if (board[i * 3 + k][j * 3 + l] !== "." && set.has(board[i * 3 + k][j * 3 + l])) {
                            return false
                        }
                        set.add(board[i * 3 + k][j * 3 + l])
                    }
                }
            }
        }

        return true
    }
}
