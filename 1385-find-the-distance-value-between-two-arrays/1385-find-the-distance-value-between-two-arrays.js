/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    return arr1.reduce((count, n) => count += arr2.every((m, j) => Math.abs(n - m) > d), 0);
};
    