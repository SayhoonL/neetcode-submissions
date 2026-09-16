class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        let tmap = new Map()
        let smap = new Map()
        let need = 0
        let have = 0
        for(let i = 0; i < t.length; i++){
            if(!tmap.get(t[i])){
                need++
            }
            tmap.set(t[i], (tmap.get(t[i]) || 0) + 1)
        }
        let l = 0
        let result = Infinity
        let ans = ""
        for(let i = 0; i < s.length; i++){
            smap.set(s[i], (smap.get(s[i]) || 0) + 1)
            if(tmap.has(s[i]) && tmap.get(s[i]) === smap.get(s[i])){
                have++
            }
            while(need === have){
                if(result > (i - l + 1)){
                    result = i - l + 1
                    ans = s.slice(l, i + 1)
                }
                smap.set(s[l], smap.get(s[l]) - 1)
                if(tmap.has(s[l]) && tmap.get(s[l]) > smap.get(s[l])){
                    have--
                }
                l++
            }
        }

        return ans
    }
}
