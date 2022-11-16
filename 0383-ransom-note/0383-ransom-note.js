/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const hashTable = new Array(26).fill(0);
    console.log(hashTable)
    for (let char of ransomNote) {
        const index = char.charCodeAt() % 26;        
        hashTable[index] = hashTable[index] > 0 ? hashTable[index] + 1 : 1;
    }
    console.log(hashTable)
    for (let char of magazine) {
        const index = char.charCodeAt() % 26;
        hashTable[index] = hashTable[index] > 0 ? hashTable[index] - 1 : 0;
    }
    console.log(hashTable)
    return hashTable.every(v => v === 0);
};