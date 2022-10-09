/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return +Object.keys(nums.reduce((acc, cur) => (!acc[cur] ? acc[cur] = 1 : delete acc[cur]) && acc, {}))[0];
};