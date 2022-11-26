​
## Iterative solution
```js
var postorder = function(root) {
if (!root) return [];
const stack = [root];
const visted = [];
while (stack.length) {
const node = stack.shift();
node.children.forEach(n => stack.unshift(n));
visted.unshift(node.val);
}
return visted;
};
```
​
​
## Recursive solution
​
```js
var postorder = function(root, visted = []) {
if (!root) return [];
root.children.forEach(node => postorder(node, visted))
visted.push(root.val);
return visted;
};
```
​
- one-line
​
```js
var postorder = function(root) {
return root ? [...root.children.map(postorder).flat(), root.val] : [];
};
```