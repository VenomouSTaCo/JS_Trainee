function isParent(parent, child) {
    return child.parentNode === parent;
}

console.log(isParent(document.body.children[0], document.querySelector('p')))
console.log(isParent(document.querySelector('ul'), document.querySelector('li')))

function getAllLinks() {
    let links = document.links;
    let res = [];
    for (let i = 0; i < links.length; i++) {
        if (!(links[i].closest('ul'))) {
            res.push(links[i]);
        }
    }
    return res;
}

getAllLinks();

function getPrevUl() {
    let elementList = document.querySelector('ul');

    if (elementList.previousElementSibling) {
        return elementList.previousElementSibling;
    }

    return elementList.parentElement;
}

console.log(getPrevUl());

function getNextUl() {
    let elementList = document.querySelector('ul');

    if (elementList.nextElementSibling) {
        return elementList.nextElementSibling;
    }

    return elementList.parentElement;

}

console.log(getNextUl());

function getLiAmount() {
    let li = document.querySelectorAll('ul li');
    return li.length;
}

console.log(getLiAmount(document));

function textMessage(text) {
    let message = document.querySelector('#alert')

    setTimeout(function () {
        message.textContent = text;
        message.classList.remove('hidden')
        message.classList.add('show')
    }, 100)

    setTimeout(function () {
        message.textContent = text;
        message.classList.remove('show')
        message.classList.add('hidden')
    }, 100)

}

textMessage('some text')
