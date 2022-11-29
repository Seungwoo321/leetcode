/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let hashTable = new Array(nums.length).fill(0);
    let duplicateNumb = 0;
    nums.forEach((n, i) => {
        hashTable[n - 1]++;
        if (hashTable[n - 1] === 2) {
            duplicateNumb = n;
        }
    });
    return [duplicateNumb, hashTable.findIndex(v => v === 0) + 1]
};