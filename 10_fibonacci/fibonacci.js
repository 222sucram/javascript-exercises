const fibonacci = function(int) {
    const seqArr = [1,1]
    const count = typeof int === 'string' ? + int : int
    if(int < 0) return 'OOPS'
    for(let i = 0; i < count; i++) {
       const newInt = seqArr[seqArr.length - 2] + seqArr[seqArr.length -1]
       seqArr.push(newInt)
    }
    return seqArr[int - 1]
};

// Do not edit below this line
module.exports = fibonacci;
