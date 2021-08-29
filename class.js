class Support {

    name;
    designation;
    address;
    country = "Bangladesh";

    // constructor making

    constructor(name, designation, address) {
        this.name = name;
        this.designation = designation;
        this.address = address;
    }

    // method making 

    sessionDetails() {
        console.log(this.name, 'starts this session at', this.address);
    }

}

const peom = new Support("Peom Dutta", "Web Developer", "Chittagong");

console.log(peom);
peom.sessionDetails();