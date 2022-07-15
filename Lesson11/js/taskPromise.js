

function promiseCreator(time = 0, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, time);
    })
}

// const prom = promiseCreator(500, 'Ok!');
// prom.then(console.log);

/*
let uList = document.querySelector('.test')

let promise = function () {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts", {method: 'GET'})
            .then((res) => resolve(res.json()))
            .catch(err => reject(err))
    })
};

promise()
    .then(data => {
        data.forEach(element => {
            let li = document.createElement("li");
            let id = document.createElement('id');
            let span = document.createElement('span');
            span.textContent = element.title;
            id.textContent = element.id + ' '
            li.appendChild(id);
            li.appendChild(span);
            uList.appendChild(li);
        })
    })
*/


let getPosts = function () {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts", {method: 'GET'})
            .then((res) => resolve(res.json()))
            .catch(err => reject(err))
    })
};

let getUsers = function () {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/users", {method: 'GET'})
            .then((res) => resolve(res.json()))
            .catch(err => reject(err))
    })
};

Promise.all([
    getPosts()
        .then(data => {
            return `Количество постов: ${data.length}`
        }),
    getUsers()
        .then(data => {
            return `Количество пользователей: ${data.length}`
        })
])
    .then(data => console.log(data));
