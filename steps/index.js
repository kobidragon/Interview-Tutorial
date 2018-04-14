// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
// 
// 
function steps(n) {


        let levelCount = 1;

    
    // loop through one level at a time
        while (levelCount <= n) {
            let outString = '';
            let stepCount = 1;
    // at each level loop through building steps which equal in number to the level
            while (stepCount <= n) {
                if (stepCount <= levelCount) {
                    outString = outString + "#";
                } else {
                    outString = outString + " ";
                }
                // debugger;
                stepCount++;
            }

    // when done building steps and spaces then print to console
            console.log(outString);
    // reinitialize increment level
            levelCount++;
        }
    
    
    }
    // steps(3);

// 
module.exports = steps;

// function steps(n) {

//     let outString = '';
//     let levelCount = 1;
//     let stepCount = 1;
//     let spaceCount = 1;

// // loop through one level at a time
//     while (levelCount <= n) {

// // at each level loop through building steps which equal in number to the level
//         while (stepCount <= levelCount) {
//             outString = outString + "#";
//             // debugger;
//             stepCount++;
//         }

// // after building steps then loop through filling out with spaces such that steps plus spaces equal n
//         spaceCount = n - levelCount;
//         let i = 1;
//         while (i <= spaceCount){
//             outString = outString + " ";
//             // debugger;
//             i++;
//         }

// // when done building steps and spaces then print to console
//         console.log(outString);
// // reinitialize output string, step count and increment level
//         outString = '';
//         stepCount = 1;
//         levelCount++;
//     }


// }
// // steps(3);