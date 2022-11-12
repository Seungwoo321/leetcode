/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let a = nums[0];
    const ranges = [];
    for (let i = 1; i < nums.length + 1; i ++) {
        let b = nums[i - 1];
        if (b + 1 !== nums[i]) {
            ranges.push(a === b ? `${a}` : `${a}->${b}`);
            a = nums[i];
        }
    }
    return ranges;
};