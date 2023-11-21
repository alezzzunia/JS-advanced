// document

// innerText - зміна тексту в елементі. 
// Якщо напишемо <b>asdas</b>, то в запишеться "<b>asdas</b>"
// innerHTML - зміна вмістимого елемента.
// Він приймає HTML-розмітку
// Якщо напишемо: <b>asdas</b>, то в результаті текст "asdas" буде жирним. (застосовується тег)

// h.innerText = "<b>asdas</b>"
// h.innerHTML = "<b>asdas</b>"

// Для зміни стилів елементу, використовуючи:
// h.style.backgroundColor = 'red'
// h.style.color = 'white'

// Пошук елементів:

// по ID
// let h = document.getElementById('heading')

// По назві тегу
// getElementsByTagName - шукає всі елементи з заданим тегом.
// Повертає їх у вигляді списку (масиву).

// let p = document.getElementsByTagName("p")
// console.log(p[0])
// p[0].style.backgroundColor = 'red'

// for (let i = 0; i < p.length; i++) {
    // p[i].style.backgroundColor = 'green'
// }

// По класу:
// getElementsByClassName - повертає колекцію елементів з класом.

// let elements = document.getElementsByClassName('class1')

// for (let i = 0; i < elements.length; i++) {
//     elements[i].style.color = 'green'
// }

// По атрибуту name
// getElementsByName - дозволяє отримати всі елементи з даними атрибуту name.

// let btn = document.getElementById('btn')

// btn.addEventListener(`click`, function() {
//     let radioRes = document.getElementsByName('answers')
//     console.log(radioRes)
//     let res = ""

//     for (let i = 0; i < radioRes.length; i++) {
//         res += `${radioRes[i].value}: ${radioRes[i].checked} \n`
//     }
//     alert(res)
// })


// Створення елементів

// let cont = document.getElementById('container')
// let btn = document.getElementById('btn')
// let btn2 = document.getElementById('btn2')
// let count = 0

// btn.addEventListener(`click`, function() {
//     let p1 = document.createElement('p')
//     p1.innerText = count++
//     p1.style.backgroundColor = 'red'
//     cont.appendChild(p1)

//     p1.addEventListener('click', function() {
        // alert(p1.innerText)
        // p1.style.backgroundColor = 'green'
//     })
// })

// btn2.addEventListener(`click`, function() {
//     cont = document.getElementById('container')
    // cont.removeChild(cont.firstChild)
//     cont.removeChild(cont.lastChild)
// })

let createTable = document.getElementById('createTable')
let table = document.getElementById('table')
let number = +prompt("Введіть число, до якого хочете отримати табличку множення:")
let count = 1

createTable.addEventListener(`click`, function() {
    for(let i = 1; i <= number; i++) {
        let createTr = document.createElement('tr')
        table.appendChild(createTr)
        for (let ii = 1; ii < 11; ii++) {
            let createTd = document.createElement('td')
            createTd.innerText = ii * i
            createTr.appendChild(createTd)
        }
    }
})

