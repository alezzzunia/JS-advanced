// Пошук елементів

// querySelector - повертає перший елемент у пошуку.
// let div = document.querySelector('.box')
// div.style.color = 'red'
// div.style.fontSize = '50px'

// querySelectorAll - повертає всі елементи з пошуку.
// let boxlist = document.querySelectorAll('.box')
// Вказуємо шлях, по якому орієнтуємось при взаємодії
// let pList = document.querySelectorAll('.box p')
// boxlist.forEach(element => {
    // element.style.backgroundColor = 'red'
// })

// boxlist.forEach(element => element.style.backgroundColor = 'red')
// pList.forEach(element => {
//     element.style.padding = '15px'
//     element.style.border = '1px solid black'
//     element.style.margin = '15px'
//     element.style.backgroundColor = 'lightgreen'
// })

// Об'єкт Node. Навігація по DOM.
// Властивості:
// childNodes - містить колекцію дочірніх вузлів.
// firstChild - повертає перший дочірній вузол поточного вузла.
// lastChild - повертає останній дочірній вузол поточного вузла.
// previousSibling - повертає попередній елемент, який знаходиться
// на одному рівні з поточним.
// nextSibling - повертає наступний елемент, який знаходиться
// на одному рівні з поточним.
// ownerDocument - повертає кореневий вузол документа.
// parentNode - повертає елемент, який містить поточний вузол.
// nodeName - повертає ім'я вузла.
// nodeType - повертає тип вузла у вигляді числа.
// Типи вузлів:
    // Код типу - Тип вузла - Опис - Приклад
    // 1 - ELEMENT - Елемент - <p> ....... </p>
    // 2 - ATTRIBUTE - Атрибут елементу - align = 'center'
    // 3 - TEXT - Текстовий вузол - Це текст (Може бути пуста стрічка)
    // 8 - COMMENT - Коментар - <!-- comment -->
    // 9 - DOCUMENT - Вузол документа - document
    // 10 - DocumentType - Декларація типу документа - <!DOCTYPE html>
// nodeValue - повертає або встановлює значення вузла
// у вигляді простого тексту.

// childNodes

// let element = document.getElementById('list')
// console.log(element.childNodes)

// for(let i = 0; i < element.childNodes.length; i++) {
    // console.log(element.childNodes[i].nodeType)
    // element.childNodes[i].style.color = 'red'

    // if (element.childNodes[i].nodeType == 1){
    //     element.childNodes[i].style.color = 'red'
    // } 

    // if (element.childNodes[i].nodeType != 1) continue
    // element.childNodes[i].style.color = 'red'
// }


// parentNode

// let p1 = document.getElementById('p1')
// console.log(p1.parentNode)

// p1.parentNode.style.border = '1px solid black'

// let p2 = p1.parentNode

// console.log(p2.parentNode)

// firstElementChild, lastElementChild

// let e = document.getElementById('list')

// Буде працювати, якщо немає пробілів, або зроблена перевірка
// на nodeType. Якщо є пробіли, то перший елемент буде
// nodeType = 3 (текст, якому не можна задати стилі)
    // e.firstChild.style.color = 'red'
    // e.lastChild.style.color = 'green'

// 
// Буде працювати не в залежності від nodeType, тобто
// шукає тільки елементи. Тільки буде шукати nodeType = 1.
// e.firstElementChild.style.color = 'red'
// e.lastElementChild.style.color = 'green'

// nextSibling, previousSibling

// let e = document.getElementsByTagName('li')[2]

// e.nextSibling.style.color = 'red'
// e.previousSibling.style.color = 'green'

// let list = document.getElementById('list')

// for (let i = 0; i <= list.childNodes.length; i++) {
//     if (list.childNodes[i].nodeType != 1) continue
//     console.log(list.childNodes[i].innerText)
//     if (list.childNodes[i].indexOf)
//     // list.childNodes[i].style.textDecoration = 'underline'
//     // console.log(list.childNodes[i])
// }