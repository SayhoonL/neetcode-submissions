class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        let root = {}
        for(let word of words){
            let node = root
            for(let char of word){
                if(!node[char]){
                    node[char] = {}
                }
                node = node[char]
            }
            node.word = word
        }
        let res = []
        function dfs(node,r,c){
            if(r >= board.length || r < 0) return
            if(c >= board.length[0] || c < 0) return
            let char = board[r][c]
            if(!node[char]) return
            node = node[char]
            if(node.word){
                res.push(node.word)
                node.word = null
            }
            board[r][c] = "#"
            dfs(node,r + 1,c)
            dfs(node,r - 1,c)
            dfs(node,r,c + 1)
            dfs(node,r,c - 1)
            board[r][c] = char
        }
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[0].length; j++){
                dfs(root,i,j)
            }
        }
        return res
    }
}
