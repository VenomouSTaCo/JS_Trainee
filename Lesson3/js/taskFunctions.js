function multiply(...args) {
    if (args.length === 0) {
        return new Error('Nothing to multiply');
    }
    let res = 1;
    for (let i = 0; i < args.length; i++) {
        res *= args[i];
    }
    return console.log(res);
}

// multiply(1, 2, 3)


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

// console.log(recursiveFact(5));

function reverseString(str) {
    return !str.length ? str : reverseString(str.substring(1)) + str[0];
}

// console.log(reverseString('test'));


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


