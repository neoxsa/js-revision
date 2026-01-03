// Write a program that transposes a given matrix (swaps rows with columns)

// Input: 2 dimensional array (symmetric matrix)

// Output: - Transposed matrix

// Examples: 
// - Transpose
// - in Javascript :  
// Input: [[a,b], [c,d], [e,f]]  // Here, 3 rows & 2 columns
// Output: [[a,b,c], [d,e,f]] // Here, 2 rows & 3 columns


// Method 1: Logic
// - Calculate number of rows and columns
// - Initiate a new array
// - loop through all the elements of an array and assign the value to new array.
// - Make sure while assignment column index becomes row index and vice versa.


function transposeMatrix(inputArray) {

    const rows = inputArray.length;
    const columns = inputArray[0].length;

    let result = []

    for (let i = 0; i < rows; i++) {
        // console.log(inputArray[i]);


        for (j = 0; j < columns; j++) {
            // console.log(inputArray[i][j]);

            if (!result[j]) {
                result[j] = []
            };

            result[j][i] = inputArray[i][j];
        }
    }

    console.log(rows, columns);

    return result;

};

console.log("Matrix of 3 rows and 2 columns", transposeMatrix([["a", "b"], ["c", "d"], ["e", "f"]]));

console.log("Matrix of 2 rows and 4 columns", transposeMatrix([[3, 4, 8, 11], [5, 6, 9, 12]]));



console.log("Matrix Asymmetric", transposeMatrix([[3, 4], [5, 6, 9, 12]]));
