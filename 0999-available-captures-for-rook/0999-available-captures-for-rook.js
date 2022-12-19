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
        if (board[i][x] === 'p') captures[0] = 1;
        if (board[i][x] === 'B') captures[0] = 0;
        i ++;
    }
    while (i < board.length) {
        if (board[i][x] === 'p') {
            captures[0] ++;
            break;
        }
        if (board[i][x] === 'B') break;
        i ++;
    }
    while (j < x) {
        if (board[y][j] === 'p') captures[1] = 1;
        if (board[y][j] === 'B') captures[1] = 0;
        j ++;
    }
    while (j < board[0].length) {
        if (board[y][j] === 'p') {
            captures[1] ++;
            break;
        }
        if (board[y][j] === 'B') break;
        j ++;
    }
    return captures[0] + captures[1];
};