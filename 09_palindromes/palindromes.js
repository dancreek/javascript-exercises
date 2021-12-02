const palindromes = function (query) {
 const letters = query.replace(/[^a-z]/gi, '').toLowerCase();
 if (letters.length < 2) return false;
 for(let i = 0; i < letters.length/2; i++) {
    if (!(letters[i] === letters[letters.length - 1 - i])) return false;
 }
 return true;
};

// Do not edit below this line
module.exports = palindromes;
