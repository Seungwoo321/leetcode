/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    return mat
        .map((r, i) => [r.filter(c => c === 1).length, i])
        .sort((a, b) => a[0] - b[0])
        .slice(0, k)
        .map(([l, i]) => i)
};