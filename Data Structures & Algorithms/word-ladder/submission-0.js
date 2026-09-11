class Solution {
    /**
     * @param {string} beginWord
     * @param {string} endWord
     * @param {string[]} wordList
     * @return {number}
     */
    ladderLength(beginWord, endWord, wordList) {
        let set = new Set(wordList)

        let queue = [beginWord]
        let index = 0
        let steps = 1
        while(queue.length > index){
            let size = queue.length
            while(size > index){
                let word = queue[index++]
                if(word === endWord) return steps
                let chars = word.split("")
                for(let i = 0; i < chars.length; i++){
                    let original = chars[i]
                    for(let j = 0; j < 26; j++){
                        let char = String.fromCharCode(j + 97)
                        chars[i] = char
                        let newWord = chars.join("")
                        if(set.has(newWord)){
                            queue.push(newWord)
                            set.delete(newWord)
                        }
                    }
                    chars[i] = original
                }
            }
            steps++
        }

        return 0
    }
}
