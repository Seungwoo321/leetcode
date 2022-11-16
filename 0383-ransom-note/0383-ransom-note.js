/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const hashTable = new Array(27).fill(0);
    for (let char of ransomNote) {
        const index = char.charCodeAt() % 97;        
        hashTable[index] = hashTable[index] > 0 ? hashTable[index] + 1 : 1;
    }
    for (let char of magazine) {
        const index = char.charCodeAt() % 97;
        hashTable[index] = hashTable[index] > 0 ? hashTable[index] - 1 : 0;
    }
    return hashTable.every(v => v === 0);
};