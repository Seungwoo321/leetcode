```
​
/**
* @param {number} turnedOn
* @return {string[]}
*/
var readBinaryWatch = function(turnedOn) {
const hms = [1, 2, 4, 8, 1, 2, 4, 8, 16, 32];
const result = [];
const length = hms.length;
dfs(turnedOn, hms, length, 0, result, 0, 0);
return result;
};
​
function dfs(count, hms, length, index, result, h, m) {
if (count < 0 || index > length || h > 11 || m > 59) {
return;
}
if (count === 0) {
result.push(`${h}:${m >= 10 ? '' : '0'}${m}`);
return;
}