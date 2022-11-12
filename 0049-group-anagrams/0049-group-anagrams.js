/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    return Object.values(strs.reduce((table, str) => {
        const key = [...str].sort().join('');
        table[key] = [str, ...table[key] ?? []];
        return table;
    }, {}));
};