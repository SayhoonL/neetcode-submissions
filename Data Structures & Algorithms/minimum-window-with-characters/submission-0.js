class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let countT = new Map()
        let countS = new Map()
        let have = 0
        
        let minLength = Infinity
        let res = []
        for(let i = 0; i < t.length; i++){
            countT.set(t[i], (countT.get(t[i]) || 0) + 1)
        }
        let need = countT.size
        let l = 0
        for(let i = 0; i < s.length; i++){
            countS.set(s[i], (countS.get(s[i]) || 0) + 1)
            if(countT.get(s[i]) === countS.get(s[i])){
                have++
            }
            while(have === need){
                if(minLength > i - l + 1){
                minLength = i - l + 1
                res = [l,i]
                }
                countS.set(s[l], countS.get(s[l]) - 1)
                if(countT.has(s[l]) && countT.get(s[l]) > countS.get(s[l])){
                    have--
                }
                l++
            }

        }
        let [first,second] = res
        return s.slice(first,second + 1)

    }
}
