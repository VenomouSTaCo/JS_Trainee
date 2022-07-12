class Car {
    brand;
    age;

    constructor(brand, age) {
        this.brand = brand;
        this.age = age;
    }

    getBrand() {
        return this.brand;
    }

    getProdYear() {
        let curDate = new Date().getFullYear();
        return curDate - this.age;
    }
}

// const lexus = new Car('lexus', 2);
// console.log(lexus.getBrand());
// console.log(lexus.getProdYear());

function Encode(str) {
    let string = str;

    this.getOriginal = function () {
        return string;
    }

    this.getEncoded = function () {
        return string.split('').reverse().join('');
    }

    this.clear = function () {
        string = '';
    }
}

// let str = new Encode('text');
// console.log(str.getEncoded());
// str.clear();
// console.log(str.getOriginal());
// console.log(str.getEncoded());

class StrClass {
    string = '';

    constructor(string) {
        this.string = string;
    }

    setString(value) {
        this.string = value;
    }

    getString() {
        return this.string;
    }

    getLength() {
        return this.string.length;
    }

    toString() {
        return this.getString();
    }

    [Symbol.toPrimitive](hint) {
        return hint === 'string' ? this.string : this.string.length;
    }
}

const str = new StrClass('test5');
console.log(str.getString());
console.log(+str);
console.log(str.toString());