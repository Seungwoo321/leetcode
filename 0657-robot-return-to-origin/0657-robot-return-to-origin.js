/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const start = [0, 0];
    
    for (let i = 0; i < moves.length; i ++) {
        let m = moves[i];
        if (m === 'U') {
            start[1] ++;
        } else if (m === 'D') {
            start[1] --;
        } else if (m === 'L') {
            start[0] --;
        } else if (m === 'R') {
            start[0] ++;
        }
    }
    return start[0] === 0 && start[1] === 0;
};