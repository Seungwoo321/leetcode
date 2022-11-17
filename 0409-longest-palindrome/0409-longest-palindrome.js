/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let hashTable = Array(52).fill(0);
    let answer = 0;
    for (let ss of s) {
        const index = ss.charCodeAt() % 52;
        hashTable[index] = hashTable[index] > 0 ? hashTable[index] + 1 : 1;
        if (hashTable[index] % 2 === 0) {
            answer += 2;
        }
    }
    return answer + (s.length > answer);
};