/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let arr = [0];
    nums.forEach((num, i) => {
        if (i < k) {
            arr[0] += num;
        } else {
            arr.push(arr[arr.length - 1] - nums[i - k] + num);
        }
    });
    return Math.max.apply(null, arr) / k;
};