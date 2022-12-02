/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color, curr = image[sr][sc]) {
    if ((sr < 0 || sr > image.length - 1) ||
        (sc < 0 || sr > image[0].length - 1) ||
        (image[sr][sc] !== curr || image[sr][sc] === color)
    ) {
        return image;
    }
    image[sr][sc] = color;
    return floodFill(image, sr - 1, sc, color, curr) &&
        floodFill(image, sr + 1, sc, color, curr) &&
        floodFill(image, sr, sc - 1, color, curr) &&
        floodFill(image, sr, sc + 1, color, curr);
};