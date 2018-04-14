// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let A = new Array ();
 
    for (x = 0; x < n; x++) {
        A.push([]);
        }
    debugger;
// start row, start column, end row, and end column indices
    let sr = 0;
    let sc = 0;
    let er = n - 1;
    let ec = n - 1;
// count to be placed as array element
    let count = 1;

    while (count <= n*n) {
// top row
        for (let i = sc; i <= ec; i++ ) {
            A[sr][i] = count;
            count++;
        }
        // debugger;
        sr++;
// right column
        for (let i = sr; i <= er; i++ ) {
            A[i][ec] = count;
            count++;
        }
        // debugger;
        ec--;
//  bottom row
        for (let i = ec; i >= sc; i-- ) {
            A[er][i] = count;
            count++;
        }
        // debugger;
        er--;
// left column
        for (let i = er; i >= sr; i-- ) {
            A[i][sc] = count;
            count++;
        }
        // debugger;
        sc++;

    }
    // console.log(A);
    // debugger;
    return A;
}

//  matrix(5);

module.exports = matrix;
