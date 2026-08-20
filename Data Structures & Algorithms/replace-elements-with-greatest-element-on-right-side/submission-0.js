class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let result = Array.from({length : arr.length}).fill(-1)
        let max = arr[arr.length - 1]
        for(let i = arr.length - 1; i >= 0; i--){
            max = Math.max(max, arr[i])
            result[i - 1] = max

        }
        return result
    }
}
