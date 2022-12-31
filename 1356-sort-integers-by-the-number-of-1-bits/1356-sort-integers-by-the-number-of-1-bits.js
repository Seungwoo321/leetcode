/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const numberOf1Bits = (n) => {
        let count = 0;
        while (n > 0) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    }    
    return arr.sort((a, b) => numberOf1Bits(a) - numberOf1Bits(b) || a - b); 

};