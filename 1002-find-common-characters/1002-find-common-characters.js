/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let answer = [];
    let mapping = new Map();
    for (let i = 0; i < words[0].length; i ++) {
        const c = words[0][i]
        mapping.set(c, (mapping.get(c) || 0) + 1);
    }
    
    for (let i = 1; i < words.length; i ++) {
        const word = words[i];
        let tmp = new Map();
        let common = new Map();
        for (let j = 0; j < words[i].length; j ++) {
            const char = words[i][j];
            tmp.set(char, (tmp.get(char) || 0) + 1);
            if (mapping.get(char) >= tmp.get(char)) {
                common.set(char, Math.min(mapping.get(char), tmp.get(char)));
            }
        }
        mapping = common;
    }
    for (let [char, count] of mapping) {
        answer = [...char.repeat(count), ...answer];
    }
    return answer;
};