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

function getWeekDayByDate(date) {
    let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
    let dt = new Date(date.replace(pattern, '$3-$2-$1'));

    return week[dt.getDay()];
}

// console.log(getWeekDayByDate('29.03.1985'))

function getWeeksCount(year) {
    let oldTime = new Date(year, 0);
    let newTime = new Date();
    return Math.floor((newTime - oldTime) / (1000 * 60 * 60 * 24 * 7));
}

// console.log(getWeeksCount(2016));

function getTextWithDelay(text) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            console.log(text.slice(0, ++i))
        }, i * 200);
    }
}

// getTextWithDelay('text');

function myFunc(string, time) {
    return setTimeout(() => console.log(string), time);
}

// myFunc('test', 1000);

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
