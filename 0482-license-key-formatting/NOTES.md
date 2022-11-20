​
# Solution 1
```
/**
* @param {string} s
* @param {number} k
* @return {string}
*/
var licenseKeyFormatting = function(s, k) {
const str = s.replaceAll('-', '').toUpperCase();
const size = str.length % k;
let key = str.slice(0, size);
for (let i = size; i < str.length; i += k) {
if (key) key += '-'
key += str.slice(i, i + k);
}
return key;
};
```
​
# Solution 2
​
```
/**
* @param {string} s
* @param {number} k
* @return {string}
*/
var licenseKeyFormatting = function(s, k) {
s = s.replaceAll('-', '').split('');
for (let i = s.length - k; i > 0; i -= k) {
s[i] = `-${s[i]}`;
}
return s.join('').toUpperCase();
};
```