/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums, start = 0, end = nums.length - 1) {
    if (start > end) return null;
    const mid = parseInt((start + end) / 2);
    return new TreeNode(nums[mid], sortedArrayToBST(nums, start, mid - 1), sortedArrayToBST(nums, mid + 1, end));
};