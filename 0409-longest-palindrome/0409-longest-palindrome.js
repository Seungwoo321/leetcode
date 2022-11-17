/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let hashTable = Array(52).fill(0);
    let flag = 0;
    for (let ss of s) {
        const index = ss.charCodeAt() % 52;
        hashTable[index] = hashTable[index] > 0 ? hashTable[index] + 1 : 1;
    }
    console.log(hashTable)
    return hashTable.reduce((acc, cur) => {
        acc += cur;
        if (cur % 2 === 1) {
            acc -= 1;
            flag = 1;
        }
        return acc;
    }, 0) + flag;
   
};