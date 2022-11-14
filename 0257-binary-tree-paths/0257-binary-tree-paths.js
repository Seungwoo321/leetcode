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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    const dfs = function (root, path = '', paths = []) {
        if (!root) return paths;
        path += `${root.val}`
        if (root.left) {
            dfs(root.left, `${path}->`, paths);
        }
        if (root.right) {
            dfs(root.right, `${path}->`, paths);
        }
        if (!root.left && !root.right) {
            paths.push(path);
        }
        return paths;
    }
    const paths = [];
    dfs(root, '', paths);
    return paths;
};