/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    if (arr.length === 1) return arr[0];
    const maxFreq = Math.floor(arr.length * 0.25);
    let count = 0;
    for (let i = 0; i < arr.length - 1; i ++) {
        if (arr[i] === arr[i + 1]) {
            count ++;
        } else {
            count = 0;
        }
        if (count >= maxFreq) {
            return arr[i];
        }
    }
};