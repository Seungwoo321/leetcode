/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const hashTable = nums1.reduce((acc, cur) => {
        acc[cur] ? acc[cur] += 1 : acc[cur] = 1;
        return acc;
    }, {})
    return [...nums2.filter(n => hashTable[n] > 0 && hashTable[n]--)];
};