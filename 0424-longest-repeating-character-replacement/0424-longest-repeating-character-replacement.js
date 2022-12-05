/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const count = {};
    let maxCount = 0;
    let start = 0;
    let result = 0;
    for (let end = 0; end < s.length; end ++) {
        count[s[end]] = (count[s[end]] || 0) + 1;
        maxCount = Math.max(count[s[end]], maxCount);
        while (end - start + 1 - maxCount > k) {
            count[s[start]] --;
            start ++;
        }
        result = Math.max(end - start + 1, result);
    }
    return result;
};