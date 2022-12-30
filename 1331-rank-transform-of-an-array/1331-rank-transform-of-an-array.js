/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let rank = 1;
    arr.map((n, i) => [n, i])
    .sort((a, b) => a[0] - b[0])
    .forEach(([n, i], j, sorted) => {
        arr[i] = rank;
        if (sorted[j + 1] && sorted[j][0] < sorted[j + 1][0]) {
            rank ++;
        }
    });
    return arr;
};