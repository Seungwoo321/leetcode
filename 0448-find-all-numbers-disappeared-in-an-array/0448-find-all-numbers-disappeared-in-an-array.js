/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const hashTable = new Array(nums.length).fill(0);
    let answer = [];
    for (let n of nums) {
        hashTable[n - 1] = n;
    }
    for (let i = 0; i < hashTable.length; i ++) {
        if (hashTable[i] === 0) {
            answer.push(+i + 1);
        }
    }
    return answer;
};