/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    const y = board.findIndex(row => row.indexOf('R') > -1);
    const x = board[y].indexOf('R');
    let captures = [0, 0];  
    let i = 0;
    let j = 0;
    while (i < y) {
        if (board[i][x] === 'p' || board[i][x] === 'B') {
            captures[0] = +(board[i][x] === 'p');
        }
        i ++;
    }
    while (i < 8) {
        if (board[i][x] === 'p' || board[i][x] === 'B') {
            captures[0] += +(board[i][x] === 'p');
            break;
        }
        i ++;
    }
    while (j < x) {
        if (board[y][j] === 'p' || board[y][j] === 'B') {
            captures[1] = +(board[y][j] === 'p');
        }
        j ++;
    }
    while (j < 8) {
        if (board[y][j] === 'p' || board[y][j] === 'B') {
            captures[1] += +(board[y][j] === 'p');
            break;
        }
        j ++;
    }
    return captures[0] + captures[1];
};