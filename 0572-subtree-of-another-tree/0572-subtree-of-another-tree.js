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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    
    const isSameTree = (p, q) => {
        if (p === null || q === null) {
            return p === q;
        }
        return p.val === q.val
            && isSameTree(p.left, q.left)
            && isSameTree(p.right, q.right);
    };
    const dfs = (node) => {
        if (!node) return node;
        return (dfs(node.left) || dfs(node.right) || isSameTree(node, subRoot));
    };
    
    return dfs(root);
    
};