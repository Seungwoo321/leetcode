```
var preorder = function(root, visted = []) {
if (root === null) return [];
if (root.val !== null) visted.push(root.val);
root.children.forEach(node => {
preorder(node, visted);
})
return visted;
};
```