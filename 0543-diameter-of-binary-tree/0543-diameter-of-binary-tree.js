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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if (!root) return 0;
    let diameter = 0;
    const dfs = (root) => {
        if (!root) return 0;
        const left = dfs(root.left);
        const right = dfs(root.right);

        diameter = Math.max(diameter, left + right);
        return Math.max(left, right) + 1;
    }
    dfs(root);
    return diameter;
    
};