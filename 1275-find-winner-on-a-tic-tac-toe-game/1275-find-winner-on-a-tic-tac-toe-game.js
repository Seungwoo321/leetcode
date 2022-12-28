/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    let a = [[0, 0, 0], [0, 0, 0]];
    let b = [[0, 0, 0], [0, 0, 0]];
    let [ad1, ad2] = [0, 0];
    let [bd1, bd2] = [0, 0];
    
    for (let i = 0; i < moves.length; i ++) {
        const [x, y] = moves[i];
        if (i % 2 === 0) {
            if (++a[0][x] === 3 || ++a[1][y] === 3 || (x === y && ++ad1 === 3) || (x + y === 2 && ++ad2 === 3)) return 'A';
        } else {
            if (++b[0][x] === 3 || ++b[1][y] === 3 || (x === y && ++bd1 === 3) || (x + y === 2 && ++bd2 === 3)) return 'B';
        }
    }
    return moves.length === 9 ? 'Draw' : 'Pending';
};