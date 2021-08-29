const products = [

    { name: "bottle", price: 50, color: "yelllow" },
    { name: "iphone", price: 150000, color: "black" },
    { name: "xiaomi", price: 50000, color: "black" }

]

// shows all the properties of matching condition 
const expensiveProduct = products.filter(product => product.price > 1000);
console.log(expensiveProduct);

// shows the first propertie of matching condition 
const expensiveProduct2 = products.find(product => product.price > 1000);
console.log(expensiveProduct2);