const removeFromArray = function(arr, ...num) {
    const outArr = [];

   console.log(arr.filter(e => num.includes(e) ? null : outArr.push(e)))

    console.log(outArr)
    // for (i of arr) {
    //     i !== num ? outArr.push(i) : null
    // }
     return outArr
};


// Do not edit below this line
module.exports = removeFromArray;
