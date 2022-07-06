// 1. Дана произвольная строка "bcdaeflmjgkhi" - упорядочить буквы по алфавиту и вернуть строку с буквами в обратном порядке ("mlkjihgfedcba"). Оформить в виду функции
function reverseSortString(str) {
    return str.split("").sort().reverse().join("");
}

console.log(reverseSortString('bcdaeflmjgkhi'))

// 2. Отсортировать массив [2,4,7,1,-2,10,-9] в обратном порядке: [10,7,4,2,1,-2,-9]. Используйте функцию
function arraySort(arr) {
    return console.log(arr.sort(function (prev, next) {
        if (prev < next) return 1;
        if (prev > next) return -1;
        return 0;
    }))
}


arraySort([2, 4, 7, 1, -2, 10, -9])

// 3. Написать функцию, которая принимает три аргумента: произвольный массив и два числа, первое из которых означает начальный номер элемента в массиве, второе - конечный номер. Функция должна вернуть новый массив, состоящий из элементов первой коллекции согласно аргументам (с - по): getNewArray(['a','b','c','d','e'], 2, 4) => ['c','d','e']
function getNewArray(arr, first, last) {
    let newArr = [].concat(arr);
    return newArr.splice(first, last - first + 1);
}

console.log(getNewArray(['a', 'b', 'c', 'd', 'e', 'f'], 2, 4));

// 4. Удвоить все элементы массива, не используя циклы ['one', 2, 'three', 4] => ['one', 2, 'three', 4, 'one', 2, 'three', 4]
function doubleArray(arr) {
    return arr.concat(arr);
}

console.log(doubleArray(['one', 2, 'three', 4]));

// 5. Удалить из [1,2,3,4,5], второй и третий элементы (3,4)
function spliceArray(arr) {
    return arr.splice(2, 3 - 2 + 1);
}

console.log(spliceArray([1, 2, 3, 4, 5]));

// 6. Удалить из [1,2,3,4,5], второй и третий элементы (3,4) и на их место вставить 'three', 'four'
function splicePushArray(arr) {
    arr.splice(2, 3 - 2 + 1)
    arr.splice(2, 0, 'three', 'four')
    return arr;
}

console.log(splicePushArray([1, 2, 3, 4, 5]));

// 7. Вставить в произвольный массив после третьего элемента любое значение, например: ['i','am','an','array'] => ['i','am','an', 'awesome', 'array']
function insertValue(arr, value) {
    arr.splice(3, 0, value);
    return arr;
}

console.log(insertValue(['I', 'am', 'an', 'array'], 'awesome'));

// 8. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [[14, 15], [1], ['a','b','c']] => [[1], [14, 15], ['a','b','c']]
function arraySortMod(arr) {
    return arr.sort(function (prev, next) {
        if (prev.length < next.length) return -1;
        if (prev.length > next.length) return 1;
        return 0;
    })
}

console.log(arraySortMod([[14, 45], [18], ['a', 'b', 'c']]));

// 9. Создать копию произвольного массива
function copyArray(arr, a, b) {
    return [].concat(arr.slice(a, b));
}

console.log(copyArray([1, 2, 3, 4, 5]));

// 10. Есть массив объектов
// Отспортировать их по возрастающему количеству ядер
let arrObj = [
    {
        cpu: 'intel', info: {cores: 2, cache: 3}
    },
    {
        cpu: 'intel', info: {cores: 4, cache: 4}
    },
    {
        cpu: 'amd', info: {cores: 1, cache: 1}
    },
    {
        cpu: 'intel', info: {cores: 3, cache: 2}
    },
    {
        cpu: 'amd', info: {cores: 4, cache: 2}
    },
]

function coreSort(arrObj) {
    return arrObj.sort(function (prev, next) {
        if (prev.info.cores < next.info.cores) return -1;
        if (prev.info.cores > next.info.cores) return 1;
        return 0;
    })
}

console.log(coreSort(arrObj));

//11. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и отсортировать от дешевых к дорогим
const products = [
    {
        title: 'prod1', price: 5.2
    },
    {
        title: 'prod2', price: 0.18
    },
    {
        title: 'prod3', price: 15
    },
    {
        title: 'prod4', price: 25
    },
    {
        title: 'prod5', price: 18.9
    },
    {
        title: 'prod6', price: 8
    },
    {
        title: 'prod7', price: 19
    },
    {
        title: 'prod8', price: 63
    },
]

function priceSort(products, gt, lt) {
    products.sort((prev, next) => prev.price - next.price)

    let newProd = [];

    for (let i = 0; i < products.length; i++) {
        if (products[i].price > gt && products[i].price < lt) {
            newProd.push(products[i])
        }
    }

    return newProd;
}

console.log(priceSort(products, 5, 10));