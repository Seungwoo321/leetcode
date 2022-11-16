/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b);
    nums2 = nums2.sort((a, b) => a - b);
    let p1 = 0;
    let p2 = 0;
    let added = null
    let answer = [];
    while (p1 < nums1.length || p2 < nums2.length) {
        if (nums1[p1] > nums2[p2]) {
            p2 ++;
        } else if (nums1[p1] < nums2[p2]) {
            p1 ++;
        } else if (nums1[p1] === nums2[p2]){
            if (added !== nums1[p1] ) {
                answer.push(nums1[p1] );
                added = nums1[p1] ;
            }
            p1 ++;
            p2 ++;
        } else {
            p1 < nums1.length && p1 ++;
            p2 < nums2.length && p2 ++;
        }
    }
    return answer;
    
};