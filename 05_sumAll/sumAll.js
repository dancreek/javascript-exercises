const sumAll = function(a,b) {
    if (!Number.isFinite(a) || !Number.isFinite(b) || a < 0 || b < 0) return 'ERROR';
    if (a === b) return a;
    let sum = Math.min(a, b);
    let max = Math.max(a, b);
    for(let adder = sum + 1; adder <= max; adder++) {
        sum += adder;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
