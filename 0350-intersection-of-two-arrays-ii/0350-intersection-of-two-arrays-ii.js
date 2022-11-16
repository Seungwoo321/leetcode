/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b);
    nums2 = nums2.sort((a, b) => a - b);
    
    const hashTable = nums1.reduce((acc, cur) => {
        acc[cur] ? acc[cur] += 1 : acc[cur] = 1;
        return acc
    }, {})
    return [...nums2.filter(n => hashTable[n] > 0 && hashTable[n]--)];
};