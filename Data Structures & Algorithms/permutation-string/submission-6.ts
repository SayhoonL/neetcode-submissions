class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let s1Arr = Array(26).fill(0)
        let s2Arr = Array(26).fill(0)
        if(s1.length > s2.length) return false
        for(let i = 0; i < s1.length; i++){
            s1Arr[s1[i].charCodeAt(0) - 97]++
            s2Arr[s2[i].charCodeAt(0) - 97]++
        }
        let l = 0
        if(isEqual(s1Arr,s2Arr)) return true
        for(let i = s1.length; i < s2.length; i++){
            s2Arr[s2[i].charCodeAt(0) - 97]++
            s2Arr[s2[l].charCodeAt(0) - 97]--
            l++
            if(isEqual(s1Arr,s2Arr)){
                return true
            }
        }

        function isEqual(arr1 : number[],arr2 : number[]){
            for(let i = 0; i < arr1.length; i++){
                if(arr1[i] !== arr2[i]){
                    return false
                }
            }
            return true
        }

        return false

    }
}
