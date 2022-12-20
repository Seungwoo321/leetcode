/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    let i = 0;
    let j = arr.length - 1;
    let sum = arr.reduce((acc, cur) => acc + cur, 0);
    let left = 0;
    let right = 0;
    while (i < arr.length) {
        left += arr[i];
        i ++;
        if (sum / 3 === left) break;
    }
    while (j > 0) {
        right += arr[j]
        j --;
        if (sum / 3 === right) break;
    }
    return i <= j && sum - left - right === left;
};