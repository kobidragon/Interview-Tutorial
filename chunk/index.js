// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let outArray = [];
    let subArray = [];
    let count = 1;
    // iterate through given array
    for (var num of array) {
        // append number to subArray and increment chunk counter
            subArray.push(num);
            // console.log ("num is " + num + " - count is " + count + " - subArray is " + subArray + " - size is " + size);
            count++;

        // after incrementing chunk count
        // if chunk count is greater than desired chunk size then push subArray in to outputArray
        // reinitialize count and subArray
        if (count > size) {
            outArray.push(subArray);
            count = 1;
            subArray =[];
        }

    }

    // if there is an element in the last subArray, push it into output and return
    if (subArray.length > 0) {
        outArray.push(subArray);
    }

    return outArray;
}


module.exports = chunk;
