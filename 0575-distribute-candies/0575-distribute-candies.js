/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    candyType = candyType.sort((a, b) => a - b);
    const maximum = candyType.length / 2
    let set = new Set();
    while (candyType.length && set.size < maximum) {
        const candy = candyType.shift();
        if (!set.has(candy)) {
            set.add(candy);
        }
    }
    return set.size;
};