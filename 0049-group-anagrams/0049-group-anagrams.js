/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hashTable = strs.reduce((table, str) => {
        const key = [...str].sort().join('');
        table[key] = [str, ...table[key] ?? []];
        return table;
    }, {});
    
    return Object.values(hashTable);
};