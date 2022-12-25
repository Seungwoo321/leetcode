/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let count = 0;
    const mapping = new Map();
    [...chars].forEach((c, i) => mapping.set(c, (mapping.get(c) || 0) + 1));
    words.forEach((word) => {
        const tmp = new Map();
        let flag = [...word].every(key => {
            tmp.set(key, (tmp.get(key) || 0) + 1);
            return mapping.get(key) >= tmp.get(key);
        });
        count += flag ? word.length : 0;
    });

    return count;
};