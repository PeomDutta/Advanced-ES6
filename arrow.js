// normal fuction 
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(2, 0));

// functional expressions
const add2 = function add2(n1, n2) {
    return n1 + n2;
}
console.log(add2(2, 1));

// anonymous function
const add3 = function (n1, n2) {
    return n1 + n2;
}
console.log(add3(1, 3));

// arrow function 
const add4 = (n1, n2) => n1 + n2;
console.log(add4(2, 3));

const getName = () => 'Peom Dutta';
console.log(getName());

// big arrow function 
const doMath = (x, y) => {
    const sum = x + y;
    const multiply = x * y;
    const div = x / y;

    const total = sum + multiply + div;

    return total;
}
console.log(doMath(5, 5));