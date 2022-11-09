/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let result = 0;
    for (let n of nums) {
        if (count === 0) {
            result = n;
        }
        count += result === n ? 1 : -1;
    }
    return result;
};