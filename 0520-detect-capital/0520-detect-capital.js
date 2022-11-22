/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return [word.toUpperCase(), word.toLowerCase(), word[0].toUpperCase() + word.slice(1).toLowerCase()].includes(word);
};