/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const bitCount = (n) => {
        let count = 0;
        while (n > 0) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    }    
    return arr.sort((a, b) => bitCount(a) - bitCount(b) || a - b); 
};