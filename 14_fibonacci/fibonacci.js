const fibonacci = function(distance) {
    if (Number(distance) < 0 || isNaN(Number(distance)))
        return "OOPS";
    let first = 0;
    let second = 1;
    for (let i = 1; i <= Number(distance); i++) {
        let interim = first + second;
        first = second;
        second = interim;
    }
    return first;
};

// Do not edit below this line
module.exports = fibonacci;
