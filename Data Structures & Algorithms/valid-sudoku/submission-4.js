class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let i = 0; i < board.length; i++) {
            let set = new Set()
            for (let j = 0; j < board[0].length; j++) {
                if(board[i][j] === ".") continue
                if (set.has(board[i][j])) return false
                set.add(board[i][j])
            }
        }
        for (let i = 0; i < board[0].length; i++) {
            let set = new Set()
            for (let j = 0; j < board.length; j++) {
                if(board[j][i] === ".") continue
                if (set.has(board[j][i])) return false
                set.add(board[j][i])
            }
        }

        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                let set = new Set()
                for (let i = r * 3; i < (r + 1) * 3; i++) {
                    for (let j = c * 3; j < (c + 1) * 3; j++) {
                        if(board[i][j] === ".") continue
                        if (set.has(board[i][j])) return false
                        set.add(board[i][j])
                    }
                }
            }
        }
        return true

    }
}
