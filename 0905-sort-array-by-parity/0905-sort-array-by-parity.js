/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    
    nums.sort((a, b) => {
        if (a % 2 === 1 && b % 2 === 1) {
            return 0
        } else if (a % 2 === 1) {
            return 1
        } else {
            return -1
        }
    })

    return nums;
};