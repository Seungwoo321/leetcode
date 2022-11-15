/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.prefixSums = nums.reduce((acc, cur) => {
        acc.push(acc[acc.length - 1] + cur);
        return acc;
    }, [0])
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.prefixSums[right + 1] - this.prefixSums[left];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */