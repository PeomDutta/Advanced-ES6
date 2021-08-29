const numbers = [11, 42, 37]
const doubleIt = number => number * 2;
const output = numbers.map(doubleIt);

console.log(output);

const products = [

    { name: "bottle", price: 50, color: "yelllow" },
    { name: "iphone", price: 150000, color: "black" },
    { name: "xiaomi", price: 50000, color: "black" }

]

const productsNames = products.map(product => product.name);
console.log(productsNames);