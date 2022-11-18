/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let i = 1;
    let answer = [];
    for (let n of nums) {
        if (n === i) {
            i++;
        } else {
            if (!nums.includes(i)) {
                answer.push(i);
            }
            i ++;
        }
    }
    return answer;
};