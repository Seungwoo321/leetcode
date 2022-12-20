/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {    
    nums.sort((a, b) => a - b);
    let modify = 0;
    let i = 0;
    while (k > 0) {
        if (nums[i] < nums[modify]) modify = i;
        if (i + 1 < nums.length) i ++;
        nums[modify] = -nums[modify];
        k --;
    }
    return nums.reduce((acc, cur) => acc + cur, 0);
};