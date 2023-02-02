/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;
    if (m > n) {
        return findMedianSortedArrays(nums2, nums1);
    }

    let imin = 0;
    let imax = m;
    let halfLen = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        const i = Math.floor((imin + imax) / 2);
        const j = halfLen - i;
        if (i < m && nums2[j-1] > nums1[i]) {
            imin = i + 1;
        } else if (i > 0 && nums1[i-1] > nums2[j]) {
            imax = i - 1;
        } else {
            let maxLeft = 0;
            if (i === 0) {
                maxLeft = nums2[j-1];
            } else if (j === 0) {
                maxLeft = nums1[i-1];
            } else {
                maxLeft = Math.max(nums1[i-1], nums2[j-1]);
            }
            if ((m + n) % 2 === 1) {
                return maxLeft;
            }

            let minRight = 0;
            if (i === m) {
                minRight = nums2[j];
            } else if (j === n) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums1[i], nums2[j]);
            }

            return (maxLeft + minRight) / 2;
        }
    }
    return 0;
};