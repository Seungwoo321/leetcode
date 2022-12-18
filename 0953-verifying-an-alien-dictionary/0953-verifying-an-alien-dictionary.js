/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let mapping = new Map([[undefined, -1]]);
    for (let i = 0; i < order.length; i++) {
        mapping.set(order[i], i);
    }
    for (let i = 1; i < words.length; i++) {
        let a = words[i - 1];
        let b = words[i];
        for (let j = 0; j < a.length; j++) {
            const aIndex = mapping.get(a[j]);
            const bIndex = mapping.get(b[j]);
            if (aIndex === bIndex) continue;
            if (aIndex < bIndex) break;
            if (aIndex > bIndex) return false;
        }
    }
    return true;
};