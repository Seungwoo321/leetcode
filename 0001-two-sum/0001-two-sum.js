/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hashTable = nums.reduce((prev, cur, i) => {
        prev[target - cur] = i;
        return prev;
    }, {})    
    for (let i = 0; i < nums.length; i ++) {
        const targetIndex = hashTable[nums[i].toString()];
        if (hashTable[nums[i].toString()] && targetIndex !== i) {
            return [i, targetIndex];
        }
    }
};