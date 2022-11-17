/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    const time = [];
    const dp = countBits(60);
    for (let i = 0; i < 12; i ++) {
        for (let j = 0; j < 60; j ++) {
            if (dp[i] + dp[j] === turnedOn) {
                time.push(`${i}:${j < 10 ? '0' : ''}${j}`);
            }
        }
    }
    return time;
    
};

var countBits = function(n) {
    const dp = [0];
    let offset = 1;
    for (let i = 1; i <= n; i ++) {
        if (offset * 2 === i) {
            offset = i;
        }
        dp[i] = dp[i - offset] + 1;
    }
    return dp;
};