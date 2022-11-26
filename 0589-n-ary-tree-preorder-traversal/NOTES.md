```
var preorder = function(root, visted = []) {
if (root === null) return [];
visted.push(root.val);
root.children.forEach(node => preorder(node, visted));
return visted;
};
```
​
```
var preorder = function(root) {
if (!root) return [];
const stack = [root];
const visted = [];
while (stack.length) {
const node = stack.shift();
visted.push(node.val);
node.children.reverse().forEach(n => stack.unshift(n));
}
return visted;
};
```