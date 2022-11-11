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
    const hashTable = [...s].reduce((acc, cur) => {
        acc[cur.charCodeAt() % 26] = (acc[cur.charCodeAt() % 26] || 0) + 1
        return acc;
    }, []);
    return Math.max([...t].reduce((acc, cur) => {
        if (acc[cur.charCodeAt() % 26]) {
            acc[cur.charCodeAt() % 26]--;
        } else {
            acc[cur.charCodeAt() % 26] = (acc[cur.charCodeAt() % 26] || 0) + 1;
        }
        return acc;
    }, hashTable).filter(v => v > 0)) === 0;
    
    // let sMap = {};
    // let tMap = {};
    // for (let i = 0; i < s.length; i ++) {
    //     sMap[s[i]] = (sMap[s[i]] || 0) + 1;
    //     tMap[t[i]] = (tMap[t[i]] || 0) + 1;
    // }
    // for (let i = 0; i < s.length; i ++) {
    //     if (sMap[s[i]] !== tMap[s[i]]) {
    //         return false
    //     }
    // }
    // return true;
    // return Object.values([...t].reduce((acc, cur) => {
    //     if (acc[cur]) {
    //         acc[cur]--;
    //     } else {
    //         acc[cur] = (acc[cur] || 0) + 1;
    //     }
    //     if (acc[cur] === 0) {
    //         delete acc[cur];
    //     }
    //     return acc;
    // },[...s].reduce((acc, cur) => {
    //     acc[cur] = (acc[cur] || 0) + 1
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