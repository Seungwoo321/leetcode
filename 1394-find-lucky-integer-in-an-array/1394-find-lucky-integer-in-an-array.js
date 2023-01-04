/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const counting = arr.reduce((acc, cur) => acc.set(cur, (acc.get(cur) || 0) + 1), new Map());
    return Math.max(...arr.filter(n => n === counting.get(n)), -1);
};