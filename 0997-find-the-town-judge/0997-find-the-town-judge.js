/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (trust.length === 1) return trust[0][1];
    const people = new Array(n).fill(0);
    const judges = new Array(n).fill(0);
    let label = -1;
    for (let i = 0; i < trust.length; i ++) {
        people[trust[i][0] - 1] += 1;
        judges[trust[i][1] - 1] += 1;
    }
    return (people.some(p => p === 0) && judges.findIndex(j => n - 1 === j) + 1) || -1
};