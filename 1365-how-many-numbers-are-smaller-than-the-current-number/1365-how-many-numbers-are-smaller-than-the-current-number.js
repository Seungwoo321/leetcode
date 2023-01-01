/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const count = new Map();
    new Set(nums).forEach((n) => {
        nums.forEach(m => {
            if (!count.has(n)) count.set(n, 0)
            if (m < n) count.set(n, count.get(n) + 1);
        });
    });
    return nums.map(n => count.get(n));
};