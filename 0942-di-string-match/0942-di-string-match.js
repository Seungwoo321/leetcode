/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let I = 0;
    let D = s.length;
    let nums = [];
    for (let i = 0; i < s.length; i ++) {
        if (s[i] === 'I') {
            nums.push(I++);
        } else {
            nums.push(D--);
        }
    }
    nums.push(I);
    return nums;
};