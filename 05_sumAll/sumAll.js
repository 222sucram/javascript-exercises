const sumAll = function(x, y) {
    const arr = new Array(...arguments).sort((a,b) => a-b);

    let start = arr[0]
    let end = arr[1]
    let sum = 0;

    if(start < 0 || end < 0) {
        return 'ERROR'
    }
    
    if(typeof start !== 'number' || typeof end !== 'number') {
        return ('ERROR')
    }

   for (i = start; i <= end; i++) {
    sum += i
    start++
   }
    console.log(sum)
    return sum
};

// Do not edit below this line
module.exports = sumAll;
