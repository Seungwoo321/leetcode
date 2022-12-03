/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let nums = [];
    for (let i = left; i < right + 1; i ++) {
        let n = i;
        let flag = i > 0;
        while (n > 0) {
            if (i % (n % 10) !== 0) {
                flag = false;
                break;
            }
            n = parseInt(n / 10);
        }
        if (flag) {
            nums.push(i);
        }
    }
    return nums;
};