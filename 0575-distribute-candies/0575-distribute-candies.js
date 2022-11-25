/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const set = new Set();
    for (let i = 0; i < candyType.length; i ++) {
        if (!set.has(candyType[i])) {
            set.add(candyType[i]);
        }
    }
    return Math.min(set.size, parseInt(candyType.length / 2));
};