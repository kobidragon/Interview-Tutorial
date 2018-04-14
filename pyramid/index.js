// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    // outer loop - iterate level (rows) over n times
    // inner loop - iterate stones (columns) over width of pyramid which is n+n+1
    // middle stone will always be the nth stone
    // number of stones to each side of middle will be level - 1
    let line = '';
    for (let level = 1; level <= n; level++) {
        let levelWidth = level - 1;
        for (stones = 1; stones <= n + n -1; stones++) {
            if ((stones < n - levelWidth) || (stones > n + levelWidth)) {
                line = line + ' ';
            } else {
                line = line + '#';
            }
        }
        console.log(line);
        // debugger;
        line = '';
    }
    return;
}
// pyramid(5);
module.exports = pyramid;
