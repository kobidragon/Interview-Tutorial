// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
// Map object where the key is the character
// and the value is the number of occurances
    const strMap = {};

// maxChar is the character with the most occurances
    let maxChar = '';
// max is maximum number of occurances
    let max = 0;

// iterate through the characters in the input string
    for (let char of str) {
// increment the value representing the occurances counter
// if an entry for this character exists
        if (strMap[char]) {
            strMap[char]++;
// else create a map entry and initialize value to 1
        } else {
            strMap[char] = 1;
        }
    }

    // console.log(str);
    // console.log(strMap);

// loop through the completed map object
// and if value is greater that current value of max
// set max to this value and maxChar to the corresponding
// character
    for (let char in strMap) {
        if (strMap[char] > max) {
            max = strMap[char];
            maxChar = char;
        }
    }

    // console.log("character " + maxChar + " occurances " + max);

// return the character with the most occurences
    return maxChar;

}

module.exports = maxChar;
