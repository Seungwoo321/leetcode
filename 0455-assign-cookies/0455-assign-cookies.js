/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let pg = 0;
    let ps = 0;
    let content = 0;
    while (pg < g.length && ps < s.length) {
        if (g[pg] <= s[ps]) {
            pg++;
            ps++;
            content++;
        } else {
            ps++;
        }
    }
    return content;
};