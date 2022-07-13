// Написать функцию, которая принимает год, а возращает день 1го января этого года
const week = ['воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
]

function getWeekDayByYear(year) {
    return week[new Date(year, 0).getDay()];
}

// console.log(getDate(2016));

// Написать функцию, которая принимает дату в виде строки "29.03.1985",
// а возвращает день в русском формате.
function getWeekDayByDate(date) {
    let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    let dt = new Date(date.replace(pattern, '$3-$2-$1'));

    return week[dt.getDay()];
}

// console.log(getWeekDayByDate('29.03.1985'))


// Узнать, сколько прошло полных недель с начала года до сегодняшней даты
function getWeeksCount(year) {
    let oldTime = new Date(year, 0);
    let newTime = new Date();
    return Math.floor((newTime - oldTime) / (1000 * 60 * 60 * 24 * 7));
}

// console.log(getWeeksCount(2016));


// Напишите код, который будет выводить в консоль строку, начиная с
// одной буквы и добавлять по одному символу каждые 200 мc
function getTextWithDelay(text) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            console.log(text.slice(0, ++i))
        }, i * 200);
    }
}

// getTextWithDelay('text');


// Создайте функцию, которая принимает строку и время в секундах.
// При вызове функции она должна показать переданный текст через заданное
// количество секунд
function myFunc(string, time) {
    return setTimeout(() => console.log(string), time);
}

// myFunc('test', 1000);


//Создать наследника от Element - новый класс TextElement.
//Этот класс работает со строками. Добавьте ему свойство length, которое будет равно this.content.length. Пусть метод setContent выполняет все то же, что и у Element + устанавливает новый this.length = value.length.
function Element(content) {
    this.content = content;
    this.elementType = 'html';

    this.getContent = function () {
        return this.content;
    }

    this.setContent = function (value) {
        this.content = value;
    }
}

function TextElement(content) {
    Element.apply(this, arguments);

    this.length = this.content.length;

    let parentEnable = this.setContent.bind(this);
    this.setContent = function (value) {
        parentEnable(value);
        this.length = value.length;
    }
}

// let textField = new TextElement('Содержимое');
// console.log(textField)
// console.log(textField.length);
// textField.setContent('Тест');
// console.log(textField)
// console.log(textField.length);
