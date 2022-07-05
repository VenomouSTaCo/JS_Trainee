// 1. Создать функцию, которая принимает массив, а возвращает новый массив с
// дублированными элементами входного массива : doubleArray([1,2,3]) = [1,2,3,1,2,3]
function doubleArray(arr) {
    let newArr = arr;

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    return console.log(newArr);
}

doubleArray([1, 2, 3])

// 2. Получить последний элемент массива (массив не менять). Использовать функцию.
function getLastElem(arr) {
    let newArr = arr;
    let elem;
    elem = newArr.pop();
    return console.log(elem);
}

getLastElem([1, 2, 3])

// 3. Создать функцию, которая принимает число N и возвращает массив заполненный числами от 1 до N: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
function getArray(n) {
    let newArr = [];

    for (let i = 1; i <= n; i++) {
        newArr.push(i);
    }

    return console.log(newArr);
}

getArray(10);

// 4. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: changeCollection([1,2,3], ['a', 'b', 'c']) => [2,3], [b,c]
function changeCollection(...args) {
    let newArr = args;

    for (let i = 0; i < newArr.length; i++) {
        newArr[i].shift();
    }

    return console.log(newArr);
}

changeCollection([1, 2, 3], ['a', 'b', 'c']);