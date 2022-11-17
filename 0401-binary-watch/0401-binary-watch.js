/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    const time = [];
    const bitCount = (num) => {
      let res = 0;
      while (num) {
        res += num & 1;
        num >>= 1;
      }
      return res;
    };
    for (let i = 0; i < 12; i ++) {
        for (let j = 0; j < 60; j ++) {
            if (bitCount(i) + bitCount(j) === turnedOn) {
                time.push(`${i}:${j < 10 ? '0' : ''}${j}`);
            }
        }
    }
    return time;
    
};

