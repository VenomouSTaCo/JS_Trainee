// Если переменная равна "hidden", присвоить ей значение "visible", иначе - "hidden".
let newArray = ['hidden', 'visible'];
let randIndex = Math.floor(Math.random() * newArray.length);
let randValue = newArray[randIndex];
let newValue = randValue === 'hidden' ? 'visible' : 'hidden';
console.log(newValue);

// Используя if, записать условие
// 1. если переменная равна нулю, присвоить ей 1
// 2. если меньше нуля - строку "less then zero"
// 3. если больше нуля - используя оператор "присвоение", переменную умножить на 10 (использовать короткую запись)
let variable = Math.random();
let res = variable === 0 ? 1 : variable < 0 ? console.log('less than zero') : variable *= 10;
console.log(res);


