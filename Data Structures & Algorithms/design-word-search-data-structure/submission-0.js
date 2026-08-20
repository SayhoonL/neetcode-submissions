class WordDictionary {
    constructor() {
        this.root = {}
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let node = this.root
        for(let char of word){
            if(!node[char]){
                node[char] = {}
            }
            node = node[char]
        }
        node.isEnd = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        function dfs(node,i){
            if(word.length === i && node.isEnd === true) return true
            let char = word[i]
            if(char === "."){
                for(let key in node){
                    if(dfs(node[key],i+1)){
                        return true
                    }
                }
                return false
            }
            else{
                if(!node[char]){
                    return false
                }
                return dfs(node[char],i + 1)
            }
        }
        return dfs(this.root,0)
    }
}
