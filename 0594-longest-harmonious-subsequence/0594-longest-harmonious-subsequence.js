/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums = nums.sort((a, b) => a - b);
    const uniqueTable = new Set();
    const countTable = new Map();
    for (let i = 0; i < nums.length; i ++) {
        const num = nums[i];
        countTable.set(num, (countTable.get(num) || 0) + 1);
        if (!uniqueTable.has(num)) {
            uniqueTable.add(num);
        }
    }
    let max = 0;
    uniqueTable.forEach(value => {
        if (uniqueTable.has(value + 1)) {
            max = Math.max(countTable.get(value) + countTable.get(value + 1) , max)  
        }
    })
    return max;
};