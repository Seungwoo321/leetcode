/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const counting = arr.reduce((acc, cur) => acc.has(cur) ? acc.set(cur, (acc.get(cur)) + 1) : acc.set(cur, 1), new Map());
    return Math.max(...arr.filter(n => n === counting.get(n)), -1);
};