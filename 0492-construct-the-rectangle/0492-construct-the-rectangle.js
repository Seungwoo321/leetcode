/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let w = parseInt(Math.sqrt(area));
    while (area % w > 0) {
        w = w - 1;
    }
    return [area / w, w];
};