​
```
var postorder = function(root, visted = []) {
if (!root) return [];
root.children.forEach(node => postorder(node, visted))
if (root.val !== null) visted.push(root.val);
return visted;
};
```
​
```
var postorder = function(root) {
return root ? [...root.children.map(postorder).flat(), root.val] : [];
};
```