/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    let min = arr[1] - arr[0];
    let res = [];
    for (let i = 0; i < arr.length - 1; i ++) {
        const diff = arr[i + 1] - arr[i];
        if (min > diff) {
            min = diff;
            res = [];
        }
        if (diff === min) {
            res.push([arr[i], arr[i + 1]]);
        } 
    }
    return res;
};