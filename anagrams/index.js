// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    //  console.log('before  ' + stringA + '   ' + stringB);
    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
    //  console.log('after  ' + stringA + '   ' + stringB);
    
    if (stringA.length != stringB.length) {
        return false;
    }

    const mapStringA = mapCharCount(stringA);
    const mapStringB = mapCharCount(stringB);

    for (key in mapStringA) {
        if (mapStringA[key] != mapStringB[key]) {
            return false;
        }
    }

    return true;

}


function mapCharCount(str) {
    // Map object where the key is the character
    // and the value is the number of occurances
        const strMap = {};
    
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
        // console.log(strMap)

        return strMap;
    }


module.exports = anagrams;
