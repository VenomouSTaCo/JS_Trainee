//1. Получить число pi из Math и округлить его до 2-х знаков после точки
let PI = Math.PI;
console.log(PI.toFixed(2));

//2. Используя Math, найти максимальное и минимальное числа из представленного ряда
// 15, 11, 16, 12, 51, 12, 13, 51
let newArray = [15, 11, 16, 12, 51, 12, 13, 51];
console.log(Math.max.apply(null, newArray));
console.log(Math.min.apply(null, newArray));

//3. Работа с Math.random:
// //a. получить случайное число и округлить его до двух цифр после запятой
console.log(Math.random().toFixed(2));
console.log(Math.ceil(100*Math.random()));

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
console.log((0.6 + 0.7).toFixed(1));

// 5. Получить число из строки "100$"
console.log(parseInt('100$'));