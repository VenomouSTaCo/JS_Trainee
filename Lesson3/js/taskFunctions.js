//1. Создать функцию multiply, которая будет принимать любое количество числе и возвращать их произведение. Если нет ни одного аргумента, вернуть ноль:
function multiply(...args) {
    if (args.length === 0) {
        return console.log(0);
    }
    let res = 1;
    for (let i = 0; i < args.length; i++) {
        res *= args[i];
    }
    return console.log(res);
}

multiply(1, 2, 3)

// 2. Факториал числа - произведение всех натуральных чисел от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью рекурсии вычислить факториал числа 10: factorial(10) = 3628800
function recursiveFact(n) {
    if (n < 0) {
        return console.log(undefined);
    }
    if (n === 1) {
        return n;
    } else {
        return n * recursiveFact(n - 1);
    }
}

console.log(recursiveFact(10));

// 3. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString('test') = 'tset'
function reverseString(str) {
    return !str.length ? str : reverseString(str.substring(1)) + str[0];
}

console.log(reverseString('test'));

// 4. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
function getCodeStringFromText(str, handler) {
    let newStr = ''

    for (let i = 0; i < str.length; i++) {
        newStr += handler(str[i]);
    }

    return console.log(newStr);
}

getCodeStringFromText('hello', function (symbol) {
    return symbol.charCodeAt() + ' ';
})

// 5. Написать функцию-рекурсию, которая выведет каждый символ строки в консоль: printChars('test')
function printChars(str) {
    let f;
    if (str !== '') {
        printChars(str.slice(1));
        f = false;
        return console.log(str[0]);
    } else if (f) {
        return console.log(str)
    }
}

printChars('test')

// 6. Создать две функции и дать им осмысленные названия:
//    - первая функция принимает массив и колбэк
//    - вторая функция (колбэк) обрабатывает каждый элемент массива
// Первая функция возвращает строку "New value": и обработанный массив:
function parser(arr, callback) {
    let res = `New value:`
    for (let i = 0; i < arr.length; i++) {
        res += callback(arr[i]);
    }
    return console.log(res)
}

parser(['my', 'name', 'is', 'Trinity'], function (symbol) {
    return symbol[0].toUpperCase() + symbol.slice(1);
})

parser([10, 20, 30], function (symbol) {
    return ` ${symbol * 10},`
})

parser([{age: 45, name: 'John'}, {age: 20, name: 'Aaron'}], function callback(symbol){
    return ` ${symbol.name} is ${symbol.age},`
})

parser(['abc', '123'], function (symbol) {
    return ` ${symbol.split("").reverse().join("")},`
})

parser([1,2,3], function (symbol){
    return ` ${symbol+5},`
})


