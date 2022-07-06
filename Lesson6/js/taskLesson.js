let body = document.body;
let taskWrap = document.querySelector('.task-wrap');
let container = document.querySelector('.container');
let listCard = document.querySelector('.list-card');
let cardBody = document.querySelector('.list-card .card-body');
let listGroup = document.querySelector('.list-group');

// погружение события
listGroup.addEventListener('click', function (e) {

    console.log('list-group');
}, true);

cardBody.addEventListener('click', function (e) {
    console.log('.list-card .card-body');
}, true);

listCard.addEventListener('click', function (e) {

    console.log('.list-card');
}, true);

container.addEventListener('click', function (e) {
    console.log('.container');
}, true);

taskWrap.addEventListener('click', function (e) {
    console.log('.tasks-wrap');
}, true);

body.addEventListener('click', function (e) {
    console.log('body');
}, true);



// всплытие события
listGroup.addEventListener('click', function (e) {
    // отменили всплытие, чтобы события не сработали у родителей
    // e.stopImmediatePropagation();
    console.log('list-group');
});

cardBody.addEventListener('click', function (e) {
    console.log('.list-card .card-body');
});

listCard.addEventListener('click', function (e) {

    console.log('.list-card');
});

container.addEventListener('click', function (e) {
    console.log('.container');
});

taskWrap.addEventListener('click', function (e) {
    console.log('.tasks-wrap');
});

body.addEventListener('click', function (e) {
    console.log('body');
});