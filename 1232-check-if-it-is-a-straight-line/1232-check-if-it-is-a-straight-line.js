/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if (coordinates.length === 2) return true;
    let [[x0, y0], [x1, y1]] = coordinates;
    let dy = y1 - y0;
    let dx = x1 - x0;
    for (let i = 0; i < coordinates.length; i ++) {
        const [x, y] = coordinates[i];

        if (dx * (y - y1) !== dy * (x - x1)) {
            return false;
        }
    }
    return true;
};