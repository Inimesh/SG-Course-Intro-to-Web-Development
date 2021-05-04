function countingCharacters(stringToCount) {
    console.log(stringToCount + " has " + stringToCount.length + " characters");
}

function countingCharacters2(stringToCount, characterToFind) {
    var x = 0
    for (var i=0; i < stringToCount.length; i++) {
        if (stringToCount[i] == characterToFind) {
            x += 1
        }
    }
    console.log('"'+characterToFind+'" appears ' + x + ' times.');
}


// str - string to search
// search - characters to find in str
function countingCharacters3(str, search) {
    var count = 0; // number found
    var numChars = search.length;     /* we need to stop loop based on multiple characters example: if searching "Ohio" with 3 characters at a time we want to stop at h so we do not go past the end of the string */
    var lastIndex = str.length - numChars;     // We will use a for loop to go through our string     // This time, we are looking for a series of characters - a substring
    for (var index = 0; index <= lastIndex; index++){         // substring gets a part of a string from a start to end index
            var current = str.substring(index, index + numChars);         // if the substring matches our series, increase our counter
            if (current == search){
                count++;
            }
    }

    return count;
}

function rollDice(numSides) {
    return Math.ceil(Math.random() * numSides);
}

for (var i =0; i<100; i++) {
    console.log(rollDice(6));
}
