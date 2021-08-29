const fish = {
    id: 1,
    name: "Hilsha",
    price: 1000,
    location: "chandpur"
};

const priceFish = fish.price;
const nameFish = fish.name;

// destructuring
const { name, price, id, location } = fish;

const company = {

    name: "gp",

    ceo: {
        id: 1,
        names: "peom",
        position: "data scientist",
    },

    web: {
        work: "web-dev",
        employee: 22,
        framework: "bootstrap"
    }

};

const { names, position } = company.ceo;
console.log({ names, position });