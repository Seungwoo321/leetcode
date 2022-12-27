/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const freq = arr.reduce((acc, cur) => acc.set(cur, (acc.get(cur) || 0) + 1), new Map());
    return freq.size === new Set(freq.values()).size;
};