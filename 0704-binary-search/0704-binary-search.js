/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = 0;
    
    while (left <= right) {
        mid = parseInt((left + right) / 2);

        const num = nums[mid];
        
        if (target > num) {
            left = mid + 1;
        } else if (target < num) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return nums[mid] === target ? mid : -1; 
};