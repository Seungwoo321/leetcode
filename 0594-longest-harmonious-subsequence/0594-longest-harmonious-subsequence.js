/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const hashTable = new Map();
    nums.forEach(num => {
        hashTable.set(num, (hashTable.get(num) || 0) + 1);
    });
    let max = 0;
    hashTable.forEach((value, key) => {
        if (hashTable.has(key + 1)) {
            max = Math.max(value + hashTable.get(key + 1) , max);
        }
    });
    return max;
};