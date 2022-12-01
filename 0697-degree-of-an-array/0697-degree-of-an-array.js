/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const hashTable = new Map();
    let degree = 0;
    let answer = 1;
    for (let i = 0; i < nums.length; i ++) {
        let n = nums[i];
        if (hashTable.has(n)) {
            const data = hashTable.get(n);
            let count = (data.count || 0) + 1;
            let len = i - data.start + 1;
            hashTable.set(n, { count, start: data.start, len });
            if (count > degree) {
                degree = count;
                answer = len
            } else if (count === degree) {
                answer = Math.min(answer, len);
            }
        } else {
            hashTable.set(n, { count: 1, start: i, len: 0 });
        }
    }
    return answer;
};