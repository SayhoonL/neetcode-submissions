class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let sortedS1 = s1.split("").sort().join("")
        let s1Length = s1.length
        for(let i = 0; i < s2.length; i++){
            let sortedS2 = s2.slice(i,i+s1Length).split("").sort().join("")
            if(sortedS1 === sortedS2){
                return true
            }
        }
        return false

    }
}
