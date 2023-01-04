/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let lucky = -1;
    const counting = arr.reduce((acc, cur) => acc.set(cur, (acc.get(cur) || 0) + 1), new Map());
    for (let [key, value]  of counting) {
        if (key === value && value > lucky) lucky = value;
    }
    return lucky;
};