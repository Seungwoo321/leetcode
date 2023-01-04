/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const target = new Array(nums.length).fill(-1);
    console.log(target)
    for (let i = 0; i < nums.length; i ++) {
        if (target[index[i]] > -1) {            
            for (let j = nums.length - 1; j > index[i]; j --) {
                target[j] = target[j - 1];
            } 
        }
        target[index[i]] = nums[i];
    }
    return target;
    
};