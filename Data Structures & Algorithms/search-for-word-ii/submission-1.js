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
            if(node.word){
                res.push(node.word)
                node.word = null
            }
            if(r >= board.length || r < 0) return 
            if(c >= board[0].length || c < 0) return

            for(let key in node){
                if(key === board[r][c]){
                    board[r][c] = "#"
                    dfs(node[key],r + 1,c,)
                    dfs(node[key],r - 1,c,)
                    dfs(node[key],r,c + 1,)
                    dfs(node[key],r,c - 1,)
                    board[r][c] = key
                }
            }
            return
            
        }
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[0].length; j++){
                dfs(root,i,j)
            }
        }
        return res
    }
}
