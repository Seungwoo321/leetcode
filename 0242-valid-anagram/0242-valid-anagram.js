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
    let sMap = {};
    for (let i = 0; i < s.length; i ++) {
        sMap[s[i]] = (sMap[s[i]] || 0) + 1;
    }
    for (let i = 0; i < t.length; i ++) {
        if (sMap[t[i]]) {
            sMap[t[i]]--;
        } else {
            sMap[t[i]] = (sMap[t[i]] || 0) + 1;
        }
        if (sMap[t[i]] === 0) {
            delete sMap[t[i]];
        }
    }
    return Object.values(sMap).length === 0;
    // return Object.values([...t].reduce((acc, cur) => {
    //     if (acc[cur]) {
    //         acc[cur]--;
    //     } else {
    //         acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    //     }
    //     if (acc[cur] === 0) {
    //         delete acc[cur];
    //     }
    //     return acc;
    // },[...s].reduce((acc, cur) => {
    //     acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    //     return acc;
    // }, {}))).length === 0;
    
    // return [...t].reduce((acc, cur) => {
    //     const i = acc.indexOf(cur);
    //     if (i > -1) {
    //         acc.splice(i, 1);
    //     }
    //     return acc;
    // },[...s]).length === 0;
};