/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let count = Infinity;
    const balloon = { b: 1, a: 1, l: 2, o: 2, n: 1 };
    const mapping = [...text].reduce((acc, cur) => balloon[cur] ? acc.set(cur, (acc.get(cur) || 0) + 1) : acc, new Map());
    for (let key in balloon) {
        if (!mapping.has(key)) return 0;
        count = Math.min(Math.floor(mapping.get(key) / balloon[key]), count);
    }
    return count;
};