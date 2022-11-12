/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hashTable = {};
    for (let i = 0; i < nums.length; i ++) {
        if (typeof hashTable[nums[i]] !== 'number') {
            hashTable[nums[i]] = i;
        } else {
            if (Math.abs(hashTable[nums[i]] - i) <= k) {
                return true;
            }
            hashTable[nums[i]] = i;
        }
    }
    return false;
};