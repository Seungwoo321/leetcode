/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    const [[x1, y1], [x2, y2], [x3, y3]] = points;
    return Math.abs((x1 * y2 + x2 * y3 + x3 * y1) - (x2 * y1 + x3 * y2 + x1 * y3)) / 2 > 0;
};