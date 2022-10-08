/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const getTriangle = (rowIndex) => {
        if (rowIndex === 0) return []
        if (rowIndex === 1) return [[1]]

        const triangle = getTriangle(rowIndex - 1);
        const row = [1]

        for (let i = 0; i < rowIndex - 2; i++) {
            row.push(triangle[rowIndex - 2][i] + (triangle[rowIndex - 2][i + 1] || 0));
        }
        row.push(1);
        triangle.push(row);
        return triangle;
    }
    return getTriangle(rowIndex + 1)[rowIndex];
};