
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.nums = [];
    this.k = k;
    nums.forEach(n => this.add(n));
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    const { nums, k } = this
    let left = 0;
    let right = nums.length;
    
    while (left < right) {
        let mid = parseInt((left + right) / 2);
        if (nums[mid] > val) {
            left = mid + 1
        } else {
            right = mid;
        }
    }
    nums.splice(left, 0, val);
    if (nums.length > k) {
        return nums[k - 1];
    }
    return nums[nums.length - 1];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */