/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewelsTable = new Set([...jewels]);
    return [...stones].reduce((acc, cur) => jewelsTable.has(cur) ? ++acc : acc, 0);
};