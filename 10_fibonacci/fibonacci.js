const fibonacci = function(input) {
    x = Number(input) + 1;
    console.log(x);
    if(x < 1) return "OOPS";
    let a = 0;
    let b = 1;
    let c;
    if (x === 1) return a;
    if (x === 2) return b;
    for(let i = 3; i <= x; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
