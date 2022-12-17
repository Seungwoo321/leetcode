/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let nums = new Array(s.length + 1).fill(0);
    for (let i = 0; i < s.length; i ++) {
        if (s[i] === 'I') {
            nums.fill(nums[i] + 1, i + 1);
        } else {
            nums[i] += s.length - i;
        }
    }
    return nums;
};