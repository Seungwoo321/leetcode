/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if (coordinates.length === 2) return true;
    coordinates.sort((a, b) => a[1] - b[1]);
    let gradient = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]);
    for (let i = 1; i < coordinates.length - 1; i ++) {
        const [x1, y1] = coordinates[i];
        const [x2, y2] = coordinates[i + 1];
        if (gradient !== (y2 - y1) / (x2 - x1)) {
            return false;
        }
    }
    return true;
};