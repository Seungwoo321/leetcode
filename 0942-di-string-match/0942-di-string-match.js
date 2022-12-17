/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    const nums = [new Array(s.length).fill(0)];
    let I = 0;
    let D = s.length
    for (let i = 0; i < s.length; i ++) {
        if (s[i] === 'I') {
            nums[i] = I++;
        } else {
            nums[i] = D--;
        }
    }
    nums.push(I);
    return nums;
};