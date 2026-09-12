class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words) {
        let indegree = new Map()
        let graph = new Map()

        for(let word of words){
            for(let char of word){
                if(!graph.has(char)){
                    graph.set(char, new Set())
                    indegree.set(char,0)
                }
            }
        }

        for(let i = 0; i < words.length - 1; i++){
            let word1 = words[i]
            let word2 = words[i + 1]

            let length = Math.min(word1.length, word2.length)

            if(
                word1.length > word2.length &&
                word1.startsWith(word2)
            ){
                return ""
            }
            for(let j = 0; j < length; j++){
                if(word1[j] !== word2[j]){
                    let from = word1[j]
                    let to = word2[j]
                    if(!graph.get(from).has(to)){
                        graph.get(from).add(to)
                        indegree.set(to,indegree.get(to) + 1)
                    }
                    break
                }


            }

        }


        let queue = []

        for(let [char,degree] of indegree){
            if(degree === 0){
                queue.push(char)
            }
        }

        let index = 0
        let result = ""
        while(queue.length > index){
            let char = queue[index++]
            result+= char

            for(let nei of graph.get(char)){
                indegree.set(nei,indegree.get(nei) - 1)
                if(indegree.get(nei) === 0){
                    queue.push(nei)
                }
            }
        }
        if(result.length !== indegree.size){
            return ""
        }

        return result
    }
}
