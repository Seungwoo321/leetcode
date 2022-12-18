/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let n = nums.length / 2;
    let counter = new Map()
    for (let num of nums) {
        let count = (counter.get(num) || 0) + 1;
        if (count === n) return num;
        counter.set(num, count);
    }
};