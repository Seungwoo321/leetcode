/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    const arr = [];
    let i = num.length - 1
    while (i > -1 || k > 0) {
        if (i >= 0) {
            k += num[i];
        }
        arr.unshift(k % 10);
        k = Math.floor(k / 10);
        i --;
    }
    return arr;
    
};