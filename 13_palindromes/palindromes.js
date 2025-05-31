const palindromes = function (inputString) {
    const allowedCharacters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let fixedString = inputString.toLowerCase().split("").filter(character => allowedCharacters.includes(character)).join("");
    return [...fixedString].reverse().join("") === fixedString;
};

// Do not edit below this line
module.exports = palindromes;
