/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const smoothImg = new Array(img.length).fill(0).map(v => new Array(img[0].length).fill(0));

    for (let i = 0; i < img.length; i ++) {
        for (let j = 0; j < img[i].length; j ++) {
            let sum = 0;
            let count = 0;
            for (let m = i - 1; m <= i + 1; m ++) {
                for (let n = j - 1; n <= j + 1; n ++) {
                    if (img[m] && img[m][n] >= 0) {
                        count ++;
                        sum += img[m][n];
                    }
                }
            }
            smoothImg[i][j] = parseInt(sum / count);
        }
    }
    return smoothImg;
    
};