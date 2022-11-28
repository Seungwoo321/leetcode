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
 * @return {string}
 */
var tree2str = function(root) {
    const dfs = (node) => {
        if (node === null) return '';
        return node.val + (node.left ? `(${dfs(node.left)})` : (node.right ? '()' : '')) + (node.right ? `(${dfs(node.right)})` : '');
    }
    return dfs(root)
};