class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        let minOpen = 0
        let maxOpen = 0
        for(let char of s){
            if(char === "("){
                minOpen++
                maxOpen++
            }
            if(char === ")"){
                minOpen--
                maxOpen--
            }
            if(char === "*"){
                minOpen--
                maxOpen++
            }
            if(maxOpen < 0){
                return false
            }
            if(minOpen < 0){
                minOpen = 0
            }
        }

        return minOpen === 0
    }
}
