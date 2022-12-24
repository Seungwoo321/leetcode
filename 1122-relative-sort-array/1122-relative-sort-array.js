/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const N = arr2.length;
    const mapping = arr2.reduce((acc, cur, i) => 
                    acc.set(cur, i), new Map());
    return arr1.sort((a, b) => 
            (mapping.has(a) ? mapping.get(a) : N + a) 
            - (mapping.has(b) ? mapping.get(b) : N + b));
};