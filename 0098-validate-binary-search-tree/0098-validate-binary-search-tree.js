/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let prev = null;
    const stack = [];
    while (root || stack.length) {
        while (root) {
            stack.unshift(root)
            root = root.left
        }
        root = stack.shift();
        if (prev !== null && prev >= root.val) {
            return false;
        }
        prev = root.val
        if (root) {
            root = root.right;
        }
    }
    return true;
    
};