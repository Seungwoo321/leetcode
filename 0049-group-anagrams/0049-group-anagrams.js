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
            table[key].push(str);
        }
        return table;
    }, {});
    
    return Object.values(hashTable);
};