// 1. Найти параграф и получить его текстовое сожержимое (только текст)
function getParagraphText() {
    return document.querySelector('p').textContent;
}

// console.log(getParagraphText());

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0)
function getNodeInfo(nodeElement) {
    let nodeInfo = {
        nodeType: '',
        nodeName: nodeElement.nodeName,
        childrenCount: nodeElement.children.length
    }

    switch (nodeElement.nodeType) {
        case 1:
            nodeInfo.nodeType = 'element node';
            break;
        case 3:
            nodeInfo.nodeType = 'text node';
            break;
        case 8:
            nodeInfo.nodeType = 'comment node';
            break;
    }
    return nodeInfo;
}

// console.log(getNodeInfo(document.querySelector('div')));

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) => ["link1", "link2", "link3"]
function getTextFromUl(ul) {
    let links = ul.querySelectorAll('a');
    let newArr = [];

    for (let i = 0; i < links.length; i++) {
        newArr.push(links[i].textContent);
    }

    return newArr;
}

// console.log(getTextFromUl(document.querySelector('ul')));

// 4. В параграфе заменить все дочерние текстовые узлы на "-text-" (вложенные теги должны остаться). Конечный результат: -text<a href="#">reprehendunt</a>-text<mark>nemore</mark>-text
function swapChildrenNodesToText(p) {
    let childrenNodes = p.childNodes;

    for (let i = 0; i < childrenNodes.length; i++) {
        if (childrenNodes[i].nodeType === 3) {
            childrenNodes[i].data = '-text-';
        }
    }

    return p;
}

// console.log((swapChildrenNodesToText(document.querySelector('p'))));

// 5. Найти в коде список ul и добавить класс "list"
function addClassToUl() {
    let ul = document.querySelector('ul');
    ul.classList.add('list');
    return ul;
}

// console.log(addClassToUl());

// 6. Найти в коде ссылку, находящуюся после списка ul, и добавить id="link"
function addIdToLinkAfterUl() {
    let indexUl;
    let arr = document.body.children;

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].tagName)
        if (arr[i].tagName === 'UL') {


            indexUl = i + 1;
            break;
        }
    }

    for (let i = indexUl; i < arr.length; i++) {
        if (arr[i].tagName === 'A') {
            arr[i].id = 'link';
            indexUl = i;
            break;
        }
    }

    return document.body.children[indexUl];
}

// console.log(addIdToLinkAfterUl());

// 7. На li через один (начинай с самого первого) установить класс "item"
function setClassItemToOddLi(ul) {
    let liArr = ul.children;

    for (let i = 0; i < liArr.length; i++) {
        if (i % 2 === 0) {
            liArr[i].classList.add('item');
        }
    }

    return ul;
}

// console.log(setClassItemToOddLi(document.querySelector('ul')));

// 8. На все ссылки в примере установить класс "custom-link"
function addClassToLinks(className) {
    let arrLinks = document.getElementsByTagName('a');

    for (let i = 0; i < arrLinks.length; i++) {
        arrLinks[i].className = className;
    }

    return arrLinks;
}

// console.log(addClassToLinks('custom-link'));

// 9. Не используя innerHTML, добавить в список несколько li с классом 'new-item' и текстов 'item' + номер li:
function addNListItems(ul, n) {

    for (let i = 0; i < n; i++) {
        let newLi = document.createElement('li');
        newLi.className = 'new-item';
        newLi.textContent = 'item ' + (i + 1);
        ul.appendChild(newLi);
    }

    return ul;
}

// console.log(addNListItems(document.querySelector('ul'), 5));

// 10. Создать три элемента strong и добавить их в конец ссылок, которые находятся внутри списка ul (в каждую ссылку один strong)
function createStrongAfterLinksInUl(ul) {
    let linkList = ul.querySelectorAll('li a');

    for (let i = 0; i < 3; i++) {
        let strong = document.createElement('strong');
        linkList[i].insertAdjacentElement('beforeend', strong);
    }

    return ul;
}

// console.log(createStrongAfterLinksInUl(document.querySelector('ul')));

// 11. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке
function createImgFirst() {
    let img = document.createElement('img');
    img.setAttribute('src', 'http://labs.jensimmons.com/2016/examples/images/testscreen-large.jpg');
    img.setAttribute('alt', 'test image');
    document.body.insertAdjacentElement('afterbegin', img);
}

// createImgFirst();
// console.log(document.body);

function makeMarkGreen() {
    let mark = document.querySelector('mark');
    mark.insertAdjacentText('beforeend', 'green');
    mark.classList.add('green');
    return mark;
}

// console.log(makeMarkGreen())

//13. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
function sortLi(ul){
    let newLi = [].concat(ul.children);

    let arr = [];

    for (let i = 0; i < ul.children.length; i++) {
        arr.push(ul.children[i]);
    }

    console.log(arr)
    arr.sort((prev, next) => {
        if (next.textContent > prev.textContent) {
            return 0;
        }

        return 1;
    })
    debugger
    // debugger
    ul.innerHTML='';
    for (let i = 0; i < arr.length; i++) {
        ul.append(arr[i]);
    }
    return ul;
}

console.log(sortLi(document.querySelector('ul')));