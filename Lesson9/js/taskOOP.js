//Есть класс Planet
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет принимать кроме name название спутника (satelliteName). Переопределите метод getName для PlanetWithSatellite так, чтобы он возвращал туже самую строку + дополнительный текст 'The satellite is ' + satelliteName.
// Например:
// let earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon'
function Planet(name) {
    this.name = name;
    this.getName = function () {
        return 'Planet name is ' + this.name;
    }
}

function PlanetWithSatellite(name, satelliteName) {
    Planet.apply(this, arguments);

    this.satelliteName = satelliteName;
    let originFunc = this.getName;
    this.getName = function () {
        let originRes = originFunc.call(this);
        originRes += '. The satellite is ' + this.satelliteName;
        return originRes;
    }
}

// let earth = new PlanetWithSatellite('earth', 'moon');
// console.log(earth.getName());


// Создайте класс "Здание" (пусть у него будет имя, количество этажей, метод "получить количество этажей" и метод "установить количество этажей"). Создайте наследников класса:
// классы "Жилой дом" и "Торговый дом". Используйте функциональное наследование
// У жилого дома появится свойство "количество квартир на этаже", а метод "получить количество этажей" должен вернуть обхект вида {этажы: 5, всегоКвартир: 5 * количество квартир}
// У торогового центра появится свойство "количество магазинов на этаже", а метод "получить количество этажей" должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
// От каждого класса создать экзепляр (дом, торговый центр)
function Building(name, floors) {
    this.name = name;
    this.floors = floors;

    this.getFloors = function () {
        return this.floors;
    }

    this.setFloors = function (newFloors) {
        this.floors = newFloors;
        return this;
    }
}

function BlockOfFlats(name, floors, flats) {
    Building.apply(this, arguments);

    this.flats = flats;
    let originFunc = this.getFloors;
    this.getFloors = function () {
        let originRes = originFunc.call(this)
        return {
            totalFloors: originRes, totalFlats: originRes * this.flats,
        }
    }
}

function Mall(name, floors, shops) {
    Building.apply(this, arguments);

    this.shops = shops;
    let originFunc = this.getFloors;
    this.getFloors = function () {
        let originRes = originFunc.call(this)
        return {
            totalFloors: originRes, totalShops: originRes * this.shops,
        }
    }
}

// let a = new Building('ada', 5);
// let b = new BlockOfFlats('aba', 5, 5);
// let c = new Mall('aca', 3, 3);
// console.log(b.getFloors());
// console.log(c.getFloors());


// Создать класс "Мебель" с базовыми свойствами "имя", "цена" и методом "получить информацию" (метод должен вывести имя и цену в объекте). Метод должен быть объявлен с помощью прототипа (Func.prototype...).
// Создать два экземпляра класса "Мебель": экземпляр "ОфиснаяМебель" и "МебельДляДома". Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие компьтерного стола или шредера). Метод "получить информацию" должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса
function Furniture(name, price) {
    this.name = name;
    this.price = price;
}

Furniture.prototype.getInfo = function () {
    return {
        name: this.name, price: this.price,
    }
}

function OfficeFurniture(name, price, computer) {
    Furniture.apply(this, arguments);
    this.computer = computer;
}

OfficeFurniture.prototype = Object.create(Furniture.prototype);
OfficeFurniture.prototype.constructor = OfficeFurniture;

OfficeFurniture.prototype.getInfo = function () {
    const res = Furniture.prototype.getInfo.call(this);
    res.computer = this.computer;
    return res;
}

function HomeFurniture(name, price, soft) {
    Furniture.apply(this, arguments);
    this.soft = soft;
}

HomeFurniture.prototype = Object.create(Furniture.prototype);
HomeFurniture.prototype.constructor = HomeFurniture;

HomeFurniture.prototype.getInfo = function () {
    const res = Furniture.prototype.getInfo.call(this);
    res.soft = this.soft;
    return res;
}

// let a = new OfficeFurniture('aba', 10, 1);
// let b = new HomeFurniture('ada', 20, true);
// console.log(a.getInfo())
// console.log(b.getInfo())

// Создать класс "Пользователь" с базовыми свойствами "имя", "дата регистрации" и методом "получить информацию" (метод должен вывести имя и дату регистрации в виде объекта). Метод должен быть объявлен с помощью прототипов (Func.prototype)
// Создать два наследника класса "Пользователь": класс "Админ" и класс "Гость".
// У класса "Админ" должно быть дополнительное свойство "суперАдмин" (может быть true/false, должно быть скрытм). Свойства определяются в момент вызова конструктора
// У класса "Гость" должно быть свойство "срокДействия" (validDate, например - поле также должно бытьс скрым), содержащее дату (например, одну неделю от момента регистрации)
// У классов-наследников метод "получить информацию" должен также информацию о дополинтельый свойствах ("суперАдмин" и "срокДействия")

// function User(name, date) {
//     this.name = name;
//     this.date = date;
// }
//
// User.prototype.getInfo = function () {
//     return {
//         name: this.name, date: this.date,
//     }
// }
//
// function Admin(name, date, isSuperAdmin = false) {
//     User.apply(this, arguments);
//     this._superAdmin = isSuperAdmin;
// }
//
// Admin.prototype = Object.create(User.prototype);
// Admin.prototype.constructor = Admin;
//
// Admin.prototype.getInfo = function () {
//     const res = User.prototype.getInfo.call(this);
//     res._superAdmin = this._superAdmin;
//     return res;
// }
//
// function Guest(name, date, validFrom = Date.now()) {
//     User.apply(this, arguments);
//     this._validDate = new Date(+(new Date(validFrom))).toLocaleDateString();
// }
//
// Guest.prototype = Object.create(User.prototype);
// Guest.prototype.constructor = Guest;
//
// Guest.prototype.getInfo = function () {
//     const res = User.prototype.getInfo.call(this);
//     res._validDate = this._validDate;
//     return res;
// }

// let a = new Admin('admin', '20.10.12', true);
// let g = new Guest('guest', '11.11.21', '12.11.21');
// console.log(a.getInfo());
// console.log(g.getInfo());


/*Задания на функциональное наследование*/

//Создайте наследника от General, у которого будет parent = false и появится новоё свойство child = true. Метод getInfo должен вернуть объект как из оригинальной функции + поле child ({test: .., parent: …, child: ...})
function General() {
    this.test = true;
    this.parent = true;
    this.getInfo = function () {
        return {
            test: this.test,
            parent: this.parent,
        };
    }
}

function Colonel() {
    General.apply(this, arguments);
    this.parent = false;
    this.child = true;

    let originFunc = this.getInfo;
    this.getInfo = function () {
        const res = originFunc.call(this);
        res.child = this.child;
        return res;
    }
}

// let a = new Colonel().getInfo();
// console.log(a);


//Создайте класс Мальчик, который при инициализации принимает имя.
// У этого класса есть свойство “хороший”=true.
// У класса так же есть метод “получить имя”, который должен вернуть строку вида:
// “Мальчика зовут ” + имя + “. Он ” + <свойство хороший> === true ? “хороший” : “плохой”.
// Далее создайте наследника от Мальчика - ПлохойМальчик. Установите свойство “хороший” равным false. Метод “получить имя” должен показывать строку из оригинального метода и добавочным текстом с новой строки “Не дружите с ним”.
function Boy(name = '') {
    this.name = name || '';
    this.good = true;

    this.getName = function () {
        return `Мальчика зовут ${this.name}. Он ${this.good ? 'хороший' : 'плохой'}.`;
    }
}

function BadBoy(name = '') {
    Boy.apply(this, arguments);

    this.good = false;

    const originFunc = this.getName;
    this.getName = function () {
        let res = originFunc.call(this);
        res += ' Не дружите с ним.';
        return res;
    }
}

// let a = new Boy('John');
// let b = new BadBoy('Mark');
// console.log(a.getName());
// console.log(b.getName());


//Создайте класс Fruit, который при инициализации принимает строковые аргументы “имя” и “цвет”. У класс есть один метод - “получить информацию”, который возвращает информацию о фрукте в виде строки “Фрукт” + имя + “цвет“ + цвет (“Фрукт - апельсин, цвет - оранжевый”).
// Создайте наследника от Fruit - SweetFruit. У него появится свойство sweetness=true.  Метод “получить информацию” должен вернуть строку “Фрукт - апельсин, цвет - оранжевый, сладость - true”. Также добавить метод “установить сладость”, который позволит установить sweetness в любое значение (например, sweetness = “сладкий”). Метод “получить информацию” должен показывать актуальное значение sweetness (“Фрукт - апельсин, цвет - оранжевый, сладость - сладкий”)
function Fruit(name = '', color = '') {
    this.getInfo = function () {
        return `Фрукт - ${name}, цвет - ${color}`
    }
}

function SweetFruit(name = '', color = '') {
    Fruit.apply(this, arguments);

    this.sweetness = true;

    this.setSweetness = function (value = '') {
        this.sweetness = value;
        return this;
    }

    const originFunc = this.getInfo;
    this.getInfo = function () {
        let res = originFunc.call(this);
        res += ', сладость - ' + this.sweetness;
        return res;
    }
}

// let a = new Fruit('апельсин', 'оранжевый');
// let b = new SweetFruit('банан', 'желтый');
// console.log(a.getInfo());
// console.log(b.getInfo());
// b.setSweetness('сладкий');
// console.log(b.getInfo());


/*Задания на прототипное наследование*/

// Дан класс User. Создать наследника NewUser, у которого метод setNewName будет ко всему создавать новое свойство this.changed = “The field ‘name’ was changed!”.
function User(name, age) {
    this.name = name || 'Unknown';
    this.age = age || 0;
}

User.prototype.setNewName = function (name) {
    this.name = name;
};

function NewUser(name, age) {
    User.apply(this, arguments);
}

NewUser.prototype = Object.create(User.prototype);
NewUser.prototype.constructor = NewUser;

NewUser.prototype.setNewName = function (name) {
    this.name = name;
    this.changed = 'The field ‘name’ was changed!';
    return this;
}

// let b = new NewUser('John', 20);
// console.log(b.setNewName('Bob'))


// Дан абстрактный класс Module.
//Разобраться, что он делает и как работает.
//Создать наследника NewModule. Его setGlobalName должен делать всё то же самое, что и родительская функция, + устанавливать this.length = this.name.length.
function Module(name) {
    if (typeof name !== 'string') {
        throw 'Enter a name!';
    }

    this.getName = function () {
        return name;
    };
}

Module.prototype.getPrettyName = function () {
    let name = this.getName();

    name = name.replace(/\s+/, '_');

    return 'The module name is ' + name[0].toUpperCase() + name.substr(1);
};

Module.prototype.setGlobalName = function (prefix) {
    let name = this.getName();
    this.name = prefix ? prefix + '_' + name : name;
};


function NewModule(name) {
    Module.apply(this, arguments);
}

NewModule.prototype = Object.create(Module.prototype);
NewModule.prototype.constructor = NewModule;

NewModule.prototype.setGlobalName = function (prefix) {
    Module.prototype.setGlobalName.call(this);
    this.length = this.name.length;
}
