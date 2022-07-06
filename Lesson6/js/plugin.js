let tasks = [];

let ul = document.querySelector('.list-group');
// let deleteBtns = document.getElementsByClassName('.delete-item');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText']

function generateList(tasksArray) {

    clearList();

    for (let i = 0; i < tasksArray.length; i++) {
        let li = listTemplate(tasksArray[i]);
        ul.appendChild(li);
    }


}


function listTemplate(task) {
    let li = document.createElement('li');
    li.textContent = task;
    li.className = 'list-group-item d-flex align-items-center';

    let iDelete = document.createElement('i')
    iDelete.className = 'fas fa-trash-alt delete-item ml-auto';
    li.appendChild(iDelete);

    return li;
}

function clearList() {
    ul.innerHTML = '';
}

function addList(list) {
    tasks.unshift(list);
    // generateList(tasks);
    ul.insertAdjacentElement('afterbegin', listTemplate(list));
}


let btn = document.querySelector('.clear-btn');

btn.addEventListener("click", function (e) {

})

// function setDeleteEvent() {
//     for (let i = 0; i < deleteBtns.length; i++) {
//         deleteBtns[i].addEventListener('click', function (e) {
//             console.log('click');
//         });
//     }
// }

function deleteListItem(target) {
    let parent = target.closest('li');
    let index = tasks.indexOf(parent.textContent);
    tasks.splice(index, 1);
    parent.remove();
}

ul.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-item')) {
        deleteListItem(e.target);

    }
})

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!inputText.value) {
        inputText.classList.add('is-invalid');
    } else {
        inputText.classList.remove('is-invalid')
        addList(inputText.value);
        form.reset();
    }
})

inputText.addEventListener('keyup', function (e) {
    if (inputText.value) {
        inputText.classList.remove('is-invalid')
    }
})


generateList(tasks)