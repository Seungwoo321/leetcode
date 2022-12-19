/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    
    let capture = 0;
    const rowCapture = new Array(8).fill(0);
    const columnCapture = new Array(8).fill(0);
    for (let i = 0; i < 8; i ++) {
        for (let j = 0; j < 8; j ++) {
            if (board[i][j] === 'R') {
                capture = rowCapture[i] + columnCapture[j];
                let [x, y] = [i, j];
                while (i < 8) {
                    if (board[i][y] === 'p' || board[i][y] === 'B') {
                        capture += +(board[i][y] === 'p')
                        break;
                    }
                    i ++;
                }
                while (j < 8) {
                    if (board[x][j] === 'p' || board[x][j] === 'B') {
                        capture += +(board[x][j] === 'p')
                        break;
                    }
                    j ++;
                }
                return capture;
            }
            if (board[i][j] === 'p' || board[i][j] === 'B') {
                rowCapture[i] = +(board[i][j] === 'p');
                columnCapture[j] = +(board[i][j] === 'p');
            }
        }
    }
};