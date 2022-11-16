/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    return [...s].findIndex(c => s.indexOf(c) === s.lastIndexOf(c));
    
    // const hashTable = [...s].reduce((acc, cur) => {
    //     acc[cur] = acc[cur] > 0 ? acc[cur] + 1 : 1;
    //     return acc;
    // },{});
    // for (let i = 0; i < s.length; i ++) {
    //     if (hashTable[s[i]] === 1) return i;
    // }
    // return -1;
};