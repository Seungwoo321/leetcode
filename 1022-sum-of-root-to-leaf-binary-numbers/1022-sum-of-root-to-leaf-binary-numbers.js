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
var sumRootToLeaf = function(root) {
    
    const queue = [[root, root.val]];
    let answer = 0;
    while (queue.length) {
        const [node, n] = queue.shift();
        
        if (node.left) {
            queue.push([node.left, n * 2 + node.left.val]);
        }
        if (node.right) {
            queue.push([node.right, n * 2 + node.right.val]);
        }
        if (!node.left && !node.right) {
            answer += n;
        }
    }
    return answer;
};