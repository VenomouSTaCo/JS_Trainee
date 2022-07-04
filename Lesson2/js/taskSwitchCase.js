// Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
// let a = 'inline';

// if (a == 'block') {
//     console.log('block');
// } else if (a == 'none') {
//     console.log('none');
// } else if (a == 'inline') {
//     console.log('inline');
// } else {
//     console.log('other');
// }

let newArray = ['block', 'none', 'inline', 'other'];
let randIndex = Math.floor(Math.random() * newArray.length);
let a = newArray[randIndex];

switch (a) {
    case 'block' :
        console.log('block');
        break;
    case 'none' :
        console.log('none');
        break;
    case 'inline' :
        console.log('inline');
        break;
    default :
        console.log('other');
}