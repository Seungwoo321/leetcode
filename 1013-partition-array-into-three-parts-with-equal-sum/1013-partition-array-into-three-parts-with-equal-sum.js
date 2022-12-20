/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    const avg = sum / 3;
    if (sum % 3 !== 0) return false;
    let i = 1;
    let j = arr.length - 2;
    let left = arr[0];
    let right = arr[arr.length - 1];
    while (i < j) {
        if (i < j && left !== avg) {
            left += arr[i];
            i ++;
        }
        if (i < j && right !== avg) {
            right += arr[j];
            j --;
        }
        if (left === avg && right === avg) return true;
    }
    return false;
};