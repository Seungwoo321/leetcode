/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const hashTable = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'].reduce((acc, cur, index) => {
        [...cur].forEach(c => {
            acc[c.charCodeAt() % 27] = index;
        });
        return acc;
    }, new Array(27).fill(0));
    return words.filter(word => {
        let firstRow = hashTable[word[0].toLowerCase().charCodeAt() % 27]
        return [...word].every(w => hashTable[w.toLowerCase().charCodeAt() % 27] === firstRow);
    })
    
};