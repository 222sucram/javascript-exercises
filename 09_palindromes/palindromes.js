const palindromes = function (str) {
    const strInput = str.toLowerCase().replace(/[^a-zA-Z ]/g, "").split('').filter((el) => el !== ' ')

    const strReverse = str.toLowerCase().replace(/[^a-zA-Z ]/g, "").split('').reverse().filter((el) => el !== ' ')
    let result = true;

    strInput.forEach((letter, i, arr) => arr[i] === strReverse[i] && result === true ? result = true : result = false)
    
    return result
};

// Do not edit below this line
module.exports = palindromes;
