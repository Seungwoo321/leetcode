/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hashTable = strs.reduce((table, str) => {
        const key = [...str].sort().join('');
        if (!table[key]) {
            table[key] = [str];
        } else {
            table[key] = [str, ...table[key]].sort();
        }
        return table;
    }, {});
    
    return Object.values(hashTable);
};