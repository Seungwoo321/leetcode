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
    while (i < x) {
        if (board[i][y] === 'p' || board[i][y] === 'B') {
            captures[0] = +(board[i][y] === 'p');
        }
        i ++;
    }
    while (i < 8) {
        if (board[i][y] === 'p' || board[i][y] === 'B') {
            captures[0] += +(board[i][y] === 'p');
            break;
        }
        i ++;
    }
    while (j < y) {
        if (board[x][j] === 'p' || board[x][j] === 'B') {
            captures[1] = +(board[x][j] === 'p');
        }
        j ++;
    }
    while (j < 8) {
        if (board[x][j] === 'p' || board[x][j] === 'B') {
            captures[1] += +(board[x][j] === 'p');
            break;
        }
        j ++;
    }
    return captures[0] + captures[1];
};