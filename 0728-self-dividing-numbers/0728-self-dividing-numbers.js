/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let nums = [];
    for (let i = left; i < right + 1; i ++) {
        if (i !== 0 && [...(i).toString()].every(n => i % n === 0)) {
            nums.push(i);
        }
    }
    return nums;
};