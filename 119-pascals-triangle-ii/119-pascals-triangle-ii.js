/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// var getRow = function(rowIndex) {
//     const getTriangle = (rowIndex) => {
//         if (rowIndex === 0) return []
//         if (rowIndex === 1) return [[1]]

//         const triangle = getTriangle(rowIndex - 1);
//         const row = [1]

//         for (let i = 0; i < rowIndex - 2; i++) {
//             row.push(triangle[rowIndex - 2][i] + (triangle[rowIndex - 2][i + 1] || 0));
//         }
//         row.push(1);
//         triangle.push(row);
//         return triangle;
//     }
//     return getTriangle(rowIndex + 1)[rowIndex];
// };
var getRow = function(rowIndex) {
    const triangle = [[1]];
    for (let i = 1; i < rowIndex + 1; i ++) {
        const row = [1];
        const prevRow = triangle[i - 1];
        for (let j = 0; j < i; j ++) {
            row.push(prevRow[j] + (prevRow[j + 1] || 0));
        }
        triangle.push(row);
    }
    return triangle[rowIndex];
};