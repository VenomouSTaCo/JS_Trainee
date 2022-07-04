//// 1. Создать объект с полем product, равным 'iphone'
let
    newObject = {
        product: 'iphone'
    }

// 2. Добавить в объект из предыдущей задачи после price, равное 1000 и поле currenct, равное 'dolar'
newObject.price = 1000;
newObject.currency = 'dollar';

// 3. Добавить поле details, которое будет содержать объект с полями model и color (значения придумать самостоятельно)
newObject.details = {};
newObject.details.model = 'iphone 6';
newObject.details.color = 'silver';

console.log(newObject);