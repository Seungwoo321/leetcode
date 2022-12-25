/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    return words.reduce((count, word, i) => {
        for (let c of [...chars]) word = word.replace(c, '');
        return count + (word.length ? 0 : words[i].length);
    }, 0);
};