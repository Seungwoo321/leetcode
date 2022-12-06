/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hashTable = new Map();
    for (let i = 0; i < nums.length; i ++) {
        const find = target - nums[i];
        if (hashTable.has(find)) {
            return [hashTable.get(find), i];
        } else {
            hashTable.set(nums[i], i);
        }
        
    }
};