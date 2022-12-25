/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let count = 0;
    const hashTable = dominoes.reduce((map, [a, b]) => {
        const key = `${Math.min(a, b)},${Math.max(a, b)}`;
        if (map.has(key)) {
            let [l, c]= map.get(key)
            map.set(key, [l + 1, c + l]);
        } else {
            map.set(key, [1, 0]);
        }
        return map;
    }, new Map());
    hashTable.forEach((value) => {
        if (value[1] > 0) count += value[1];
    });
    return count;
};