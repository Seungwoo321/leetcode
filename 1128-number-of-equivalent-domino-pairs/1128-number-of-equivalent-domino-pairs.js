/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    return dominoes.reduce(([map, count], [a, b]) => {
        const key = `${Math.min(a, b)},${Math.max(a, b)}`;
        if (map.has(key)) {
            let c = map.get(key);
            count += c;
            map.set(key, c + 1);
        } else {
            map.set(key, 1);
        }
        return [map, count];
    }, [new Map(), 0])[1];
};