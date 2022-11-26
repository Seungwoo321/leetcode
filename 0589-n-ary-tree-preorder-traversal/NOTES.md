## Iterative solution
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
​
​
## Recursive solution
​
```
var preorder = function(root, visted = []) {
if (root === null) return [];
visted.push(root.val);
root.children.forEach(node => preorder(node, visted));
return visted;
};
```
​
one-line
```
var preorder = function(root) {
return root ? [root.val, ...root.children.map(preorder).flat()] : [];
};
```
​
​