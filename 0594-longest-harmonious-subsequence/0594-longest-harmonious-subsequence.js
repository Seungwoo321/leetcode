/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const hashTable = new Map();
    for (let i = 0; i < nums.length; i ++) {
        hashTable.set(nums[i], (hashTable.get(nums[i]) || 0) + 1);
    }
    let max = 0;
    hashTable.forEach((value, key) => {
        if (hashTable.has(key + 1)) {
            max = Math.max(value + hashTable.get(key + 1) , max);
        }
    });
    return max;
};