/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const count = {};
    const left = new Map();
    const right = new Map();

    for (let i = 0; i < nums.length; i ++) {
        let n = nums[i];
        if (count[n]) {
            count[n] = count[n] + 1;
            right.set(n, i);
        } else {
            count[n] = 1;
            left.set(n, i);
            right.set(n, i);
        }
    }
    
    let degree = Math.max(...Object.values(count));
    let minLen = nums.length;
    for (let k in count) {
        const freq = count[k];
        if (freq === degree) {
            minLen = Math.min(minLen, right.get(Number(k)) - left.get(Number(k)) + 1);
        }
    }
    return minLen;
};