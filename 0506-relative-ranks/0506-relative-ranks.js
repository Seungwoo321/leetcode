/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const queue = score.map((v, i) => [v, i]).sort((a, b) => b[0] - a[0]);
    let rank = 1;
    while (queue.length) {
        const [value, index] = queue.shift();
        if (rank === 1) {
            score[index] = "Gold Medal";
            rank = 2
        } else if (rank === 2) {
            score[index] = "Silver Medal";
            rank = 3
        } else if (rank === 3) {
            score[index] = "Bronze Medal";
            rank = 4
        } else {
            score[index] = '' + rank;
            rank ++;
        }
    }
    return score;
};