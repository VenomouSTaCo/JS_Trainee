// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let ul = document.querySelector('.list-group');
let form = document.forms['addTodoItem'];
let inputText = form.elements['todoText'];
let notificationAlert = document.querySelector('.notification-alert');
let btnClearList = document.querySelector('.btn-clear-list');

function getList() {
    ajax.send({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos',
        success: function (res) {
            tasks = JSON.parse(res);
            generateList(tasks);
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function generateId() {
    let id = '';
    let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

    for (let i = 0; i < 20; i++) {
        let position = Math.floor(Math.random() * words.length);
        id += words[position];
    }

    return id;
}

function listTemplate(task) {
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex align-items-center';
    li.setAttribute('data-id', task.id);
    let span = document.createElement('span');
    span.textContent = task.title;

    let iDelete = document.createElement('i');
    iDelete.className = 'fas fa-trash-alt delete-item ml-4';
    let iEdit = document.createElement('i');
    iEdit.className = 'fas fa-edit edit-item ml-auto';

    if (task.completed) {
        li.classList.add('bg-success');
    }

    li.appendChild(span);
    li.appendChild(iEdit);
    li.appendChild(iDelete);

    return li;
}

function clearList() {
    ul.innerHTML = '';
}

function generateList(tasksArray) {

    clearList();

    if (tasksArray.length === 0) {
        emptyListMessage();
    }

    for (let i = 0; i < tasksArray.length; i++) {
        let li = listTemplate(tasksArray[i]);
        ul.appendChild(li);
    }

}

function addList(list) {
    let newTask = {
        id: generateId(),
        title: list.title,
        completed: false,
    };

    tasks.unshift(newTask);
    ul.insertAdjacentElement('afterbegin', listTemplate(newTask));

    localStorage.setItem('tasks', JSON.stringify(tasks));

    message({
        cssClass: 'alert-success',
        timeout: 4000,
        text: 'Task has been added successfully',
    });
}

function deleteListItem(id) {

    // for (let i = 0; i < tasks.length; i++) {
    //     if (tasks[i].id === id) {
    //         tasks.splice(i, 1);
    //         break;
    //     }
    // }

    ajax.send({
        method: 'DELETE',
        url: 'https://jsonplaceholder.typicode.com/todos/' + id,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        success: function (res) {
            let response = JSON.parse(res);
            message({
                cssClass: 'alert-danger',
                timeout: 4000,
                text: 'Task has been removed successfully',
            });
        },
        error: function (err) {
            console.log(err);
        }
    })

    // localStorage.setItem('tasks', JSON.stringify(tasks));


}

function editListItem(id, newValue) {

    ajax.send({
        method: 'PATCH',
        url: 'https://jsonplaceholder.typicode.com/todos/' + id,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        data: JSON.stringify({
            title: newValue,
        }),
        success: function (res) {
            let response = JSON.parse(res);
            message({
                cssClass: 'alert-success',
                timeout: 4000,
                text: 'Task has been updated successfully',
            });
        },
        error: function (err) {
            console.log(err);
        }
    })
    // for (let i = 0; i < tasks.length; i++) {
    //     if (tasks[i].id === id) {
    //         tasks[i].text = newValue;
    //         break;
    //     }
    // }

    // localStorage.setItem('tasks', JSON.stringify(tasks));


}

function message(settings) {
    // notificationAlert.classList.add(settings.cssClass);
    notificationAlert.textContent = settings.text;
    notificationAlert.className = `alert notification-alert show ${settings.cssClass}`;

    setTimeout(function () {
        notificationAlert.classList.remove('show');
        notificationAlert.classList.remove(settings.cssClass);
    }, settings.timeout);
}

function emptyListMessage() {
    return message({
        cssClass: 'alert-danger',
        timeout: 4000,
        text: 'List is empty',
    })
}

ul.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete-item')) {
        let parent = e.target.closest('li');
        let id = parent.dataset.id;
        deleteListItem(id);
        parent.remove();
    } else if (e.target.classList.contains('edit-item')) {
        e.target.classList.toggle('fa-save');
        let id = e.target.closest('li').dataset.id;
        let span = e.target.closest('li').querySelector('span');

        if (e.target.classList.contains('fa-save')) {
            span.setAttribute('contenteditable', true);
            span.focus();
        } else {
            span.setAttribute('contenteditable', false);
            span.blur();
            editListItem(id, span.textContent);
        }
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!inputText.value) {
        inputText.classList.add('is-invalid');
    } else {
        inputText.classList.remove('is-invalid')
        ajax.send({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/todos',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            data: JSON.stringify({
                title: inputText.value,
                completed: false,
            }),
            success: function (res) {
                let response = JSON.parse(res);
                addList(response);
            },
            error: function (err) {
                console.log(err);
            }
        })
        form.reset();
    }
});

inputText.addEventListener('keyup', function () {
    if (inputText.value) {
        inputText.classList.remove('is-invalid');
    }
});

btnClearList.addEventListener('click', () => {
    if (localStorage.length !== 0) {
        localStorage.clear();
        message({
            cssClass: 'alert-danger',
            timeout: 4000,
            text: 'List has been cleared successfully',
        });
        clearList();
    } else {
        emptyListMessage();
    }
})

getList();