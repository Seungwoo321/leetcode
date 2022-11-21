```
/**
* @param {string[]} words
* @return {string[]}
*/
var findWords = function(words) {
return /^[qwertyuiop]*$/i.test(w) || /^[asdfghjkl]*$/i.test(w) || /^[zxcvbnm]*$/i.test(w);
};
```