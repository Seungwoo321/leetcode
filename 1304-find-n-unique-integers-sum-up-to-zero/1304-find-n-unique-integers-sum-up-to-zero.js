/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    const arr = [];
    if (n % 2 === 1) arr.push(0);
    let m = n % 2 === 1 ? n - 1 : n;
    for (let i = 0; i < m / 2; i ++) {
        arr.push(i + 1);
        arr.push(- i - 1);
    }
    return arr;
};