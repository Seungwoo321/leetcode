/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const hashTable = new Array(26).fill(0);
    for (let ss of s) {
        const char = ss.charCodeAt() % 97;
        hashTable[char] = hashTable[char] > 0 ? hashTable[char] + 1 : 1;
    }
    for (let tt of t) {
        const char = tt.charCodeAt() % 97;
        hashTable[char] = hashTable[char] > 0 ? hashTable[char] - 1 : 1;
    }
    return String.fromCharCode(hashTable.findIndex(v => v > 0) + 97);
};