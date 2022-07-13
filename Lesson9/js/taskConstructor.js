// 1. Создать конструктор для производства автомобилей. Конструктор должен принимать марку автомобиля и возраст машины. Конструктор должен иметь метод, который возвращает марку, и второй метод, который возвращает год производства машины (год текущий минус возраст машины, использовать Date для получения текущего года)
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


// 2. Написать конструктор, который умеет элементарно шифровать строки (например, сделать из строки строку-перевертыш, или заменить все символы их цифровым представлением, или любой другой метод). Конструктор при инициализации получается строку и меет следующие методы:
// a. показать оригинальную строку
// b. показать зашифрованную строку
// c. стереть все данные - метод должен удалить все строки
// Строки не должны быть доступны через this, только с помощью методов.
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


// 3. Создать класс, который создает экземпляры, работающие со строкой и имеет следущие свойства и методы:
// a. свойство "строка" будет содержать строку
// b. методы для получаения и установки строки
// c. метод для получения длины строки
// d. при вызове toString() вернуть строку
// e. при приведении объекта к числу вернуть длину строки
// var str = new КлассСтрока('test');
// str.получить(); // 'test'
// +str; // 4  https://learn.javascript.ru/object-conversion#chislennoe-preobrazovanie
// str.toString(); // 'test'
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

// const str = new StrClass('test5');
// console.log(str.getString());
// console.log(+str);
// console.log(str.toString());