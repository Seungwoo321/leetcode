/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const setTable = new Set();
    words.forEach(word => {
        setTable.add([...word].reduce((acc, cur) => {
            acc += morseCodes[(cur.charCodeAt() - 97) % 26];
            return acc;
        }, ''));
    });
    return setTable.size;
};