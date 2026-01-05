// Write a program that multiplies two matrices and returns the result

// Input: Two 2-dimensional array

// Output: 
// - One 2-dimensional array which is the multiplication result of 2 matrices

// Formula: 
// C[i][j] = A[i][0]*B[0][j] + A[i][1]*B[1][j] + .... + A[i][n-1]*B[n-1][j]

// Input A is an m x n matrix (m rows and n columns)
// Input B is an n x p matrix (n rows and p columns)
// Output C ia an m x p matrix

// Example:
// A: [[1,2], [3,4]] : m x n = 2 x 2
// B: [[5,6], [7,8]] : n x p = 2 x 2
// C: m x p matrix = 2 x 2
// C: [[a,b], [c,d]]
// - a = C[0][0] = A[0][0] * B[0][0] + A[0][1] * B[1][0] = (1*5)+(2*7) = 5+14 = 19
// - b = C[0][1] = A[0][0] * B[0][1] + A[0][1] * B[1][1] =  (1*6) + (2*8) = 6+16 = 22
// - c = C[1][0] = A[1][0] * B[0][0] + A[1][1] * B[1][0] =  (3*5) + (4*7) = 15+28 = 43
// - d = C[1][1] = A[1][0] * B[0][1] + A[1][1] * B[1][1] =  (3*6) + (4*8) = 18+32 = 50

// C = [[19,22], [43,50]]



// Method 1 : 

function matrixMultiplication(matrixA, matrixB) {

    const rowsA = matrixA.length
    const rowsB = matrixB.length
    const columnsB = matrixB[0].length

    const rowsC = rowsA;
    const columnsC = columnsB

    const result = []

    for (let i = 0; i < rowsC; i++) {
        for (let j = 0; j < columnsC; j++) {
            //    console.log(i,j);

            let cellValue = 0;
            for (let n = 0; n < rowsB; n++) {
                cellValue = cellValue + matrixA[i][n] * matrixB[n][j]
            }

            if (!result[i]) {
                result[i] = [];
            }

            result[i][j] = cellValue;
        }

    };
    return result;
};


console.log("Matrix Multiplication", matrixMultiplication([[1, 2], [3, 4]], [[5, 6], [7, 8]]));
console.log("Matrix Multiplication", matrixMultiplication([[1, 2, 3], [4, 5, 6]], [[7, 8], [9, 10], [11, 12]]));
console.log("Matrix Multiplication", matrixMultiplication([[1, 2], [3, 4]], [[5, 6, 7], [8, 9, 10]]))
