/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const hashTable = new Map();
    let degree = 0;
    let minLen = 1;
    for (let i = 0; i < nums.length; i ++) {
        let n = nums[i];
        if (hashTable.has(n)) {
            const data = hashTable.get(n);
            let frequency = (data.frequency || 0) + 1;
            let len = i - data.first + 1;
            hashTable.set(n, { frequency, first: data.first, len });
            if (frequency > degree) {
                degree = frequency;
                minLen = len
            } else if (frequency === degree) {
                minLen = Math.min(minLen, len);
            }
        } else {
            hashTable.set(n, { frequency: 1, first: i, len: 0 });
        }
    }
    return minLen;
};