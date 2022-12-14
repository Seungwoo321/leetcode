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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let head = null
    const reverseInorder = (node) => {
        if (!node) return node;
        if (node.right) {
            reverseInorder(node.right)
        }
        let tmp = head;
        head = node
        
        if (node.left) {
            reverseInorder(node.left);
        }
        node.left = null;
        node.right = tmp;
    }
    reverseInorder(root)
    return head;
};