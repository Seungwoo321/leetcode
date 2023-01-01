/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sorted = nums.slice().sort((a, b) => a - b).reduce((acc, cur, i) => {
        return acc.has(cur) ? acc : acc.set(cur, i);
    }, new Map());
    return nums.map(n => sorted.get(n));
};