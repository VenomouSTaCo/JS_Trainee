let testString = 'some test string';

//1 Получить первую и последнюю буквы строки
console.log(testString.charAt(0))
console.log(testString.charAt(testString.length - 1))

//2 Сделать первую и последнюю буквы в верхнем регистре
function changeRegister(string) {
    let newStr = string[0].toUpperCase();
    let len = string.length;

    for (let i = 1; i < len - 1; i++) {
        newStr += string[i];
    }

    newStr += string[len - 1].toUpperCase();
    return newStr;
}

console.log(changeRegister(testString))

let len = testString.length;
let newStr = testString.charAt(0).toUpperCase() + testString.slice(1, len - 1) + testString.charAt(len - 1).toUpperCase();

console.log(newStr);

//3 Найти положение слова 'string' в строке
let position = [];
let subStr = 'string'
position[0] = testString.indexOf(subStr);
position[1] = position[0] + subStr.length - 1;
console.log(position);

//4 Найти положение второго пробела ("вручную ничего не считать")
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

console.log(getSecondSpace(testString))

//5 получить строку с 5-го символа длиной 4 буквы
let newSlice = testString.substr(5, 4);
console.log(newSlice);

//6  получить строку с 5-го по 9-й символы
let newSlice2 = testString.substring(5, 9);
console.log(newSlice2);

//7 Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
let newSlice3 = testString.slice(-6);
console.log(newSlice3);

//8 Из двух переменных a=20 и b=16 (где 20 и 16 - числа) получить переменную string, в которой будет содержаться текст "2016"
function strConc(a, b) {
    return a.toString() + b.toString();
}

console.log(strConc(20, 16));