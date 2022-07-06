function isParent(parent, child) {
    return child.parentNode === parent;
}

console.log(isParent(document.body.children[0], document.querySelector('p')))
console.log(isParent(document.querySelector('ul'), document.querySelector('li')))

function getAllLinks() {
    let links = document.links;
    for (let i = 0; i < links.length; i++) {
        if (!(links[i].closest('ul'))) {
            console.log(links[i]);
        }
    }
}

getAllLinks();

function getPrevUl() {
    return document.querySelector('ul').previousElementSibling;
}

console.log(getPrevUl());

function getNextUl() {
    return document.querySelector('ul').nextElementSibling;
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
