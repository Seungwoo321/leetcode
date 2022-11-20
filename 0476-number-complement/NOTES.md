```
/**
* @param {number} num
* @return {number}
*/
var findComplement = function (num) {
let mask = 1;
while (mask < num) {
mask = (mask << 1) | 1;
}
return num ^ mask;
};
```
​
```
/**
* @param {number} num
* @return {number}
*/
var findComplement = function(num) {
let d = 2;
while (d <= num) {
d *= 2;
}
return d - num - 1;
};
```
d *= 2;