const repeatString = function() {
    let returnString = '';
    const userString = arguments[0];
    if (arguments[1] < 0) return 'ERROR'; 
    for(let i = 0; i < arguments[1]; i++) {
        returnString = returnString + arguments[0];
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
