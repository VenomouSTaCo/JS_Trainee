let testString = 'some test string';

//Task 1

// console.log(testString.charAt(0))
// console.log(testString.charAt(testString.length - 1))

//Task 2

function changeRegister(string) {
    let newStr = string[0].toUpperCase();
    let len = string.length;

    for (let i = 1; i < len - 1; i++) {
        newStr += string[i];
    }

    newStr += string[len - 1].toUpperCase();
    return newStr;
}

// console.log(changeRegister(testString))

let len = testString.length;
let newStr = testString.charAt(0).toUpperCase() + testString.slice(1, len - 1) + testString.charAt(len - 1).toUpperCase();

// console.log(newStr);

//Task 3

let position = [];
let subStr = 'string'
position[0] = testString.indexOf(subStr);
position[1] = position[0] + subStr.length - 1;
console.log(position);

//Task 4

function getSecondSpace(string) {
    let positionSpace = null;
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (count === 2) {
            break;
        }
        if (string.charAt(i) === ' ') {
            count++;
            positionSpace = i;
        }
    }
    return positionSpace;
}

// console.log(getSecondSpace(testString))

//Task 5

let newSlice = testString.substr(5, 4);
// console.log(newSlice);

//Task 6

let newSlice2 = testString.substring(5, 9);
// console.log(newSlice2);

//Task 7

let newSlice3 = testString.slice(-6);
// console.log(newSlice3);

//Task 8

function strConc(a, b) {
    return a.toString() + b.toString();
}

// console.log(strConc(20, 16));