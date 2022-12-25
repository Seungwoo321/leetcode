/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const mapping = [...chars].reduce((acc, cur) => acc.set(cur, (acc.get(cur) || 0) + 1), new Map);
    return words.reduce((count, word) => {
        const tmp = new Map();
        return count += [...word].every(key => {
            tmp.set(key, (tmp.get(key) || 0) + 1);
            return mapping.get(key) >= tmp.get(key);
        }) ? word.length : 0;
    }, 0);
};