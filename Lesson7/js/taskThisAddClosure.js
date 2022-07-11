// 1. Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};
const rectangle = {
    width: (Math.random() * 100).toFixed(0),
    height: (Math.random() * 100).toFixed(0),
    getSquare: function () {
        return this.width * this.height;
    },
}
// console.log(rectangle.getSquare());

// 2. Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:
const price = {
    price: 10,
    discount: '15%',
    getPrice() {
        return this.price;
    },
    getPriceWithDiscount() {
        return this.price * (1 - parseFloat(this.discount) / 100);
    },
}
// console.log(price.getPrice());
// console.log(price.getPriceWithDiscount());

// 3. Дан объект и функция: const user = {name: 'Abraham'}, getUserName = function() {...}; Внесите в этот код такие изменения, чтобы можно было вызвать user.getName() и получить 'Abraham'
const user = {
    name: 'Abraham',
    getName: getUserName,
}

function getUserName() {
    return this.name;
}

// console.log(user.getName());

// 4. Создать объект, у которого будет поле высота и метод "увеличить высоту на один". Метод должен возвращать новую высоту: object.height = 10; object.inc(); // придумать свое название для метода object.height; //11
const object = {
    height: 10,
    incHeight: function () {
        this.height++;
    }
}
// console.log(object.height);
object.incHeight();
// console.log(object.height);

// 5. Создать объект "вычислитель", у которого есть числовое свойство "значение" и методы "удвоить", "прибавить один", "отнять один". Методы можно вызывать через точку, образуя цепочку методов:
const numerator = {
    value: 1,
    double: function () {
        this.value *= 2;
        return this;
    },
    plusOne: function () {
        this.value++;
        return this;
    },
    minusOne: function () {
        this.value--;
        return this;
    },
}

numerator.double().plusOne().plusOne().minusOne();
// console.log(numerator.value);

// 6. Разобрать и объяснить, что тут происходит
/*
const user = {
    name: 'Abraham',
};
otherUser = {
    name: 'John',
    getName: function () {
        return this.name;
    },
};
user.getName; // undefined вызываем несуществубщий метод
user.getName = otherUser.getName; одалживаем метод
user.getName(); // 'Abraham' снова вызываем, только теперь одолженный метод
otherUser.getName; // 'John' вызываем метод принадлежащий объекту
*/

// 7. Что выведет код, почему?
/* function getList() {
    return this.list;
}
let users = {
    length: 4,
    list: ['Abraham', 'James', 'John', 'Steven']
}

getList(); // undefined, т.к. this будет указывать на window
users.getList = getList; // передаем тело функции в метод
users.getList(); // // тк this ссылается на users, то вернет массив
getList.call(users); // вернет массив
 */

// 8. Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)
const firstObj = {
    price: '77$',
    amount: 92,
    getFullPrice: function () {
        return parseFloat(this.price) * this.amount;
    }
}
// console.log(firstObj.getFullPrice())

// 9. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь. Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы. Для этого "позаимствуйте" метод из предыдущего объекта
const secondObj = {
    price: '44$',
    amount: 131,
}
// console.log(firstObj.getFullPrice.call(secondObj));

// 10. Даны объект и функция:
const sizes = {
    width: 5,
    height: 10,
};
const getSquare = function () {
    return this.width * this.height;
};
// Не изменяя функцию или объект, получить результат функции getSquare для объект sizes
// console.log(getSquare.apply(sizes))

// 11. Дан массив let numbers = [4,12,0,10,-2,4]. Используя ссылку на массив numbers и Math.min, найти минимальный элемент массива
const numbers = [4, 12, 0, 10, -2, 4];
// console.log(Math.min.apply(null, numbers));

// 12. Исправить метод getFullHeigth таким образом, чтобы можно было вычислить сумму трех слагаемых (высота плюс отступы).
// const element = {
//     height: '15px',
//     marginTop: '5px',
//     marginBottom: '5px',
//     getFullHeight: function () {
//         return parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom);
//     }
// }
// console.log(element.getFullHeight());

// Для другого объекта block {height: '5px', marginTop: '3px', marginBottom: '3px'} вычислить полную высоту getFullHeight, используя для этого объект element. В объект ничего не допусывать
const block = {
    height: '5px',
    marginTop: '3px',
    marginBottom: '3px',
}
// console.log(element.getFullHeight.call(block));

//13. Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25
const element = {
    height: 25,
    getHeight: function () {
        return this.height;
    }
};

// const getElementHeight = element.getHeight;
// console.log(getElementHeight)
// const getElementHeight = element.getHeight;
// console.log(getElementHeight.call(element));

// console.log(getElementHeight.call(element));


// 1. Создайте функцию, которая бы умела делать:
/* minus(10)(6); //4
minus(5)(6); //-1
minus(10)(); //10
minus()(6); //-6
minus()(); //0 */
function minus(first = 0) {
    return function (second = 0) {
        return first -= second;
    }
}

// console.log(minus(10)(6));
// console.log(minus(5)(6));
// console.log(minus(10)());
// console.log(minus()(6));
// console.log(minus()());

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами
function multiplyMaker(first) {
    return function (second) {
        return first *= second;
    }
}

const multiply = multiplyMaker(2);

// console.log(multiply(2));
// console.log(multiply(1));
// console.log(multiply(3));
// console.log(multiply(10));

// 3. Реализовать модуль, который работает со строкой и имеет методы:
/*а. установить строку:
     i. если передано пустое значение, то установить пустую строку
     ii. если передано число, чисто привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш*/
const module = (() => {
    let str = '';

    function setStr(string) {
        if (typeof (string) === 'number') {
            string = String(string);
        }
        str += string;
    }

    function getStr() {
        return str;
    }

    function getLength() {
        return str.length;
    }

    function reverseStr() {
        return str.split('').reverse().join('');
    }

    return {
        setStr,
        getStr,
        getLength,
        reverseStr,
    };
});


// module.setStr('abcde');
// console.log(module.getStr());
// console.log(module.getLength());
// console.log(module.reverseStr());

// 4. Создайте модуль "калькулятор", который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this)
const calculator = (function () {
    let number;

    function setValue(value) {
        number = value;
        return this;
    }

    function add(value) {
        number += value;
        return this;
    }

    function multiply(value) {
        number *= value;
        return this;
    }

    function subtract(value) {
        number -= value;
        return this;
    }

    function divide(value) {
        number /= value;
        return this;
    }

    function exponentiate(value) {
        number **= value;
        return this;
    }

    function getValue() {
        return number.toFixed(2);
    }

    return {
        setValue,
        add,
        multiply,
        subtract,
        divide,
        exponentiate,
        getValue,
    }
})();

// console.log(calculator.setValue(10).exponentiate(2).getValue());
