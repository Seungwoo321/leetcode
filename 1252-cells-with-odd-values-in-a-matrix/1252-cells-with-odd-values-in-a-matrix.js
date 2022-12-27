/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    const rows = new Array(m).fill(0);
    const cols = new Array(n).fill(0);
    
    for (let i = 0; i < indices.length; i ++) {
        const [r, c] = indices[i];
        rows[r] ^= 1;
        cols[c] ^= 1;
    }
    const rowOdd = rows.filter(r => r).length;
    const colOdd = cols.filter(c => c).length;

    return (m - rowOdd) * colOdd + (n - colOdd) * rowOdd;
};