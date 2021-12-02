const reverseString = function(str) {
    let returnString = '';
    let characters = str.split('');
    if (str.length < 1) return ''; //handle a zero length string
    for(let i = characters.length - 1; i >= 0; i--) {
        returnString += characters[i];
    }

    return returnString;
};

// Do not edit below this line
module.exports = reverseString;
