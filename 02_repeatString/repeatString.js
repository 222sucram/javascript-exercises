const repeatString = function(str, num) {
    let strConc = ''
    if(num < 0) strConc = 'ERROR'
    for(let i = 0; i < num; i++) {
        strConc += str;
    }
    return strConc;
};

// Do not edit below this line
 module.exports = repeatString;
