//1. Дана строка "I am in the easycode". Сделать первые пуквы каждого слова в верхнем регистре. Использовать for или while
let str = 'I am in the easycode';
let i = 0;
let newStr = '';

while (i < str.length) {
    if (str[i] === ' ') {
        newStr += str[i] + str.charAt(i + 1).toUpperCase();
        i += 2;
    } else {
        newStr += str[i];
        i++;
    }

}

console.log(newStr);

// 2. Дана строка "tseb eht ma i". Используя циклы,  сделать строку-перевершыш (то есть последняя буква становится первой, предпоследняя - второй и т.д.)
let str2 = 'tseb eht ma i';
let newStr2 = '';

for (i = str2.length - 1; i >= 0; i--) {
    newStr2 += str2[i];
}

console.log(newStr2);

// 3. Факториал числа - произведение всех натуральных числе от 1 до n включительно: 3! = 3 * 2 * 1, 5! = 5 * 4 * 3 * 2 * 1. С помощью циплов вычислить факториал числа 10
function factorial(n) {
    if (n < 1) {
        return undefined;
    }
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}

console.log(factorial(10))

// 4. Используя циклы, создать строку "Считаем до 10и: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10"
function getCountStr(n) {
    let countStr = `Считаем до ${n}:`;

    for (let i = 1; i < n; i++) {
        countStr += ` ${i},`
    }

    countStr += ` ${n}`;
    return countStr;
}

console.log((getCountStr(10)))

// 5. На основе строки "JavaScript is a pretty good language" сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены
let str4 = 'JavaScript is a pretty good language';
let j = 0;
let newStr4 = '';

while (j < str4.length) {
    if (str4[j] === ' ') {
        newStr4 += str4.charAt(j + 1).toUpperCase();
        j += 2;
    } else {
        newStr4 += str4[j];
        j++;
    }

}

console.log(newStr4);

// 6. Найти все нечетные числа от 1 до 15 включительно и вывести их в консоль
function getOdds(n) {
    let newStr = '';

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            newStr += `${i} `;
        }
    }

    if (newStr !== '') {
        newStr = newStr.slice(0, -1);
    }
    return newStr;
}

console.log(getOdds(15))
