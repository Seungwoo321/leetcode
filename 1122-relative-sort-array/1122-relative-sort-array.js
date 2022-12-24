/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const mapping = new Map();
    arr2.forEach((n, i) => mapping.set(n, i));
    arr1.sort((a, b) => {
        if (mapping.has(a) && mapping.has(b)) {
            return mapping.get(a) - mapping.get(b);
        } else if (mapping.has(a) || mapping.has(b)) {
            return mapping.has(a) ? -1 : 0;
        } else {
            return a - b;
        }
        
    })
    return arr1;
};