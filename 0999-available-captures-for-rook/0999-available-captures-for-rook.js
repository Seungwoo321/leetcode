/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let [x, y] = [0, 0];
    for (let row in board) {
        if (board[row].indexOf('R') > -1) {
            [x, y] = [row, board[row].indexOf('R')];
            break;
        }
    }
    let captures = [0, 0];  
    let i = 0;
    let j = 0;
    while (i < 8) {
        if (board[i][y] === 'p' || board[i][y] === 'B') {
            let n = +(board[i][y] === 'p');
            captures[0] = (i < x ? 0 : captures[0]) + n;
            if (i > x) break;
        }
        i ++;
    }
    while (j < 8) {
        if (board[x][j] === 'p' || board[x][j] === 'B') {
            let n = +(board[x][j] === 'p');
            captures[1] = (j < y ? 0 : captures[1]) + n;
            if (j > y) break;
        }
        j ++;
    }
    return captures[0] + captures[1];
};