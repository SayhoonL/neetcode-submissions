class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let arr = [...nums1]
        arr.push(...nums2)
        arr.sort((a,b) => a -b)
        if(arr.length % 2 === 1){
            return arr[(arr.length - 1)/2]
        }
        else{
            return (arr[arr.length/2 - 1] + arr[arr.length/2]) / 2
        }
    }
}
