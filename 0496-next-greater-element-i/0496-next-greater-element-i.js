/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const map = {};
    for (let n of nums2) {
        while (stack.length && stack[stack.length - 1] < n) {
            map[stack[stack.length - 1]] = n;
            stack.pop();
        }
        stack.push(n);
    }
    let answer = [];
    for (let n of nums1) {
        answer.push(map[n] || -1)
    }
    return answer;
};