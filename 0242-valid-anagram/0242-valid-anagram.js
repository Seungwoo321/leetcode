/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // return s.length === t.length && [...s].sort().join('') === [...t].sort().join('');
    
    if (s.length !== t.length) {
        return false;
    }
    const sMap = [...s].reduce((acc, cur) => {
        acc[cur] = acc[cur] ? acc[cur] + 1 : 1
        return acc;
    }, {});
    return Object.values([...t].reduce((acc, cur) => {
        if (acc[cur]) {
            acc[cur]--;
        } else {
            acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
        }
        if (acc[cur] === 0) {
            delete acc[cur];
        }
        // console.log(acc)
        return acc;
    },sMap)).length === 0;
};