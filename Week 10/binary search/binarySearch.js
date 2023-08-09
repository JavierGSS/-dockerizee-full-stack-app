/*
Instructions:
Your task is to complete the binary search 
implementation below within the searchForAlphabeticalIndex function. 
You should not need to edit code anywhere else than within
the recursiveBinarySearch code block. You will need to handle cases for:
-loop complete and letter not found - return false
-letter found - return true and set the binarySearchCharacterIndex 
to the index it was found on
-letter not found and loop not complete - call 
the function again on either the upper half or lower half of 
the previous iterations search and check same cases again
*/

// do not edit this function
/**
 * Function that generates an array of letters ranging from charA to charZ.
 * The passed in values don't necessarily need to be 'a' and 'z' but for this 
 * activity they should always be the default values.
 * @param charA, beginning of the range to generate the alphabetical array
 * @param charZ, end of the range for alphabetical array generated
 */
const generateAlphabetArray = (charA = 'a', charZ = 'z') => {
    let array = [], j = charZ.charCodeAt(0);
    for (let i = charA.charCodeAt(0); i <= j; ++i) {
        array.push(String.fromCharCode(i));
    }
    return array;
}


const searchForAlphabeticalIndex =
([stringToFindIndexForFirstLetter], alphabetArray = generateAlphabetArray()) => {
    // The binarySearchResults and linearSearchResults variables are 
    // incremented every time you iterate the binary and 
    // linear searches. As an iteration comes with the cost of computational time,
    // the one with lower iterations and therefore lower number has better performance.
    let binarySearchResults = 0;
    let binarySearchCharacterIndex = -1;
    let linearSearchResults = 0;
    let linearSearchCharacterIndex = -1;

    // first make sure stringToFindIndexForFirstLetter var is lowercase as
    // your array generated above does not contain capital letters
    stringToFindIndexForFirstLetter = stringToFindIndexForFirstLetter.toLowerCase();


    // here is linear search implementation, you don't need to change this
    for (let i = 0; i < alphabetArray.length; i++) {
        // iterates the result to show how many iterations and
        // therefore how efficient this search is
        linearSearchResults++;
        if (alphabetArray[i] === stringToFindIndexForFirstLetter) {
            linearSearchCharacterIndex = i;
            break; // keyword to jump out of a loop
        }
        // if you get through to the last iteration of the loop without breaking, 
        // set result to -1 for not found
        if (i === alphabetArray.length - 1) {
            linearSearchResults = -1;
        }
    }

    // ***** your code goes inside the function below *****
    // here is the recursive binary search implementation

    let recursiveBinarySearch = (array, letter, startIndex, endIndex) => {
        // this keeps track of how many iterations of Binary Search you have done, 
        // no need to change this code
        binarySearchResults++; 

        console.log(startIndex, endIndex);

        // establish base case for not finding the letter 
        // in the given array, if you are on an iteration where the 
        // startIndex is greater than the endIndex, first set the 
        // binarySearchResults variable to be -1 and then return false

        if (startIndex > endIndex) {
            binarySearchResults = -1;
            return false;
        }

        //find middle index between the given start and end, 
        // hint: use Math.floor(your calculation for the middle index between 
        // start and end) as that rounds down to the nearest integer, you are not 
        // searching decimals
        // for example for array from 0 to 49 (length is 50),
        // you calculate midpoint by writing let midIndex = Math.floor((0+49) / 2)
        /* CODE GOES HERE */

        let midIndex = Math.floor((startIndex + endIndex) / 2);

        //check if the value at midIndex is equal to the character being 
        // searched for, return true if so
        // before returning true inside the if statement, 
        // write the following line of code: binarySearchCharacterIndex = midIndex; 
        // this sets the variable up top to the index the character was found 
        // at so you can see the result in browser
        // hint: make sure to use == or === to check if you found the number, 
        // single equals sign is only used for assigning values to variables, not 
        // checking equality
        /* CODE GOES HERE */

        if (array[midIndex] === letter) {
            binarySearchCharacterIndex = midIndex;
            return true;
        }

        // determine the if/else condition that should house 
        // these two return statements that recursively call the same function after 
        // splitting the data in one direction or another
        // note that just like 2 < 4 will evaluate to true, 'a' < 'b' will 
        // also evaluate true, javascript can compare letters just 
        // like numbers by their position in the alphabet
        // you need to write the if statement that 
        // will determine what condition needs to happen for you to search the 
        // lower half (start to middle) of the array rather than 
        // the upper half (middle to end) next

        if (array[midIndex] > letter) {
            return recursiveBinarySearch(array, letter, startIndex, midIndex - 1);
        } else {
            return recursiveBinarySearch(array, letter, midIndex + 1, endIndex);
        }
        return false;
    }

    // Invokes the recursiveBinarySearch you just defined, do not change the following
    if (recursiveBinarySearch(alphabetArray, stringToFindIndexForFirstLetter, 0, alphabetArray.length - 1)) {
        console.log('Letter: ', stringToFindIndexForFirstLetter, ' found after ', binarySearchResults, ' iterations.')
    } else {
        console.log('Letter: ', stringToFindIndexForFirstLetter, ' not found within array: ', alphabetArray);
    }


    // add the necessary inputs and and results to the DOM
    const numberToSearchForElm = document.getElementById('number-searching-for-id') || {};
    numberToSearchForElm.innerText += stringToFindIndexForFirstLetter;

    const arrayOfNumbersToSearchInsideElm = document.getElementById('searched-array-id') || {};
    arrayOfNumbersToSearchInsideElm.innerText += alphabetArray;

    const linearSearchResultsElm = document.getElementById('linear-search-results') || {};
    linearSearchResultsElm.innerText += linearSearchResults;

    const linearSearchPositionElm = document.getElementById('linear-search-position') || {};
    linearSearchPositionElm.innerText += linearSearchCharacterIndex;

    const binarySearchResultsElm = document.getElementById('binary-search-results') || {};
    binarySearchResultsElm.innerText += binarySearchResults;

    const binarySearchPositionElm = document.getElementById('binary-search-position') || {};
    binarySearchPositionElm.innerText += binarySearchCharacterIndex;

    return binarySearchResults;
}

console.log("h")
//don't change this line
  module.exports = { searchForAlphabeticalIndex };
