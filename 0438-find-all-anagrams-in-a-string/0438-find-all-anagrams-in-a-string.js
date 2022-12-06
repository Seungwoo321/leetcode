/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var arrayValuesEqual = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i ++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
var findAnagrams = function(s, p) {
    const pTable = new Array(26).fill(0);
    const sTable = new Array(26).fill(0);
    const result = [];
    for (let i = 0; i < p.length; i ++) {
        pTable[p.charCodeAt(i) % 26] ++;
    }
    for (let i = 0; i < s.length; i ++) {
        sTable[s.charCodeAt(i) % 26] ++;
        
        if (i > p.length - 1) {
            sTable[s.charCodeAt(i - p.length) % 26] --;
        }
        
        if (i >= p.length - 1) {
            if (arrayValuesEqual(sTable, pTable)) {
                result.push(i - (p.length -1));
            }
        }
    }
    return result;
};