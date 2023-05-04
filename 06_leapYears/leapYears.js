const leapYears = function(year) {
    yearStr = '' + year
    yearCentury = yearStr.slice(-2)

    if(year % 4 === 0 && yearCentury == '00' && yearStr % 400 === 0 || year % 4 === 0 && yearCentury != '00') return true;

    if(year % 4 !== 0) return false;

    if(yearCentury == '00' && yearStr % 400 !== 0) return false
};

// Do not edit below this line
module.exports = leapYears;
