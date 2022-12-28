/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    let a = [[0, 0, 0], [0, 0, 0]];
    let b = [[0, 0, 0], [0, 0, 0]];
    let ad1 = 0;
    let ad2 = 0;
    let bd1 = 0;
    let bd2 = 0;
    for (let i = 0; i < moves.length; i ++) {
        const [x, y] = moves[i];
        if (i % 2 === 0) {
            a[0][x] += 1;
            a[1][y] += 1;
            if (a[0][x] === 3 || a[1][y] === 3) return 'A';
            if (x === y && ++ad1 === 3 || x + y === 2 && ++ad2 === 3) {
                return 'A';
            }
        } else {
            b[0][x] += 1;
            b[1][y] += 1;
            if (b[0][x] === 3 || b[1][y] === 3) return 'B';
            if (x === y && ++bd1 === 3 || x + y === 2 && ++bd2 === 3) {
                return 'B';
            }
        }
    }
    return moves.length === 9 ? 'Draw' : 'Pending';
};