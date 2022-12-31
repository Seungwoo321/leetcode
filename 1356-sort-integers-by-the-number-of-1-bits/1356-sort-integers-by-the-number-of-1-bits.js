/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const numberOf1Bits = (n) => [...n.toString(2).padStart(32, '0')].filter(v => v === '1').length;
        
    return arr.sort((a, b) => numberOf1Bits(a) - numberOf1Bits(b) || a - b); 

};