// console.log(document.forms[0])
// console.log(document.forms['form1'])
// console.log(document.forms.form1)

// oninput - подія, коли змінюємо текст
// onchange - подія, коли змінюємо текст і поле втрачає фокус

// let login = document.getElementById('login')
// let password = document.getElementById('password')
// let out = document.getElementById('out')
// let outChange = document.getElementById('outChange')

// login.addEventListener('input', function() {
//     // console.log(login.value)
//     out.innerText = login.value
// })

// login.addEventListener('change', function() {
//     outChange.innerText = login.value
// })

// password.addEventListener('input', function() {
//     console.log(password.value)
// })

// Створити кнопку і текстове поле
// Клікаємо на кнопку - виходить в alert те, що ввели в текстове поле.
// Коли текстове поле отримує фокус - поміняти бордер на жовтий.
// Коли втрачає - поміняти назад.
// Коли вводимо щось, то текст з'являється в параграфі (p1)
// Коли вводимо щось і текстове поле втрачає фокус - виводимо текст в параграф (p2)

// let btn = document.getElementById('btn')
// let text = document.getElementById('text')
// let p1 = document.getElementById('p1')
// let p2 = document.getElementById('p2')

// btn.addEventListener('click', function() {
//     alert(text.value)
// })

// text.addEventListener('focus', function() {
//     text.style.border = '1px solid yellow'
// })

// text.addEventListener('blur', function() {
//     text.style.borderColor = 'gray'
// })

// text.addEventListener('input', function() {
//     p1.innerText = text.value
// })

// text.addEventListener('change', function() {
//     p2.innerText = text.value
// })


// let range = document.getElementById('range')
// let out = document.getElementById('out')

// range.addEventListener('input', function() {
//     out.innerText = range.value
// })

// Task 2
// Створити 3 повзунки, які будуть відповідати за кольори в форматі RGB
// В залежності від зміни повзунків, має формуватись колір і змінюватись фон сторінки

// let red = document.getElementById('red')
// let blue = document.getElementById('blue')
// let green = document.getElementById('green')
// let redout = document.getElementById('redout')
// let blueout = document.getElementById('blueout')
// let greenout = document.getElementById('greenout')

// red.addEventListener('input', function() {
//     redout.innerText = red.value
//     changeColor()
// })

// blue.addEventListener('input', function() {
//     blueout.innerText = blue.value
//     changeColor()
// })

// green.addEventListener('input', function() {
//     greenout.innerText = green.value
//     changeColor()
// })

// function changeColor() {
//     document.body.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`
// }


// let list = document.getElementById('list')

// list.addEventListener('input', function () {
//     console.log(list.options[list.options.selectedIndex].value)
//     console.log(list.options[list.options.selectedIndex].innerText)
// })


// Створити список з кольорів.
// Користувач вибирає колір зі списку.
// Ваше завдання змінити фон сторінки на той колір, який вибрав користувач.
// Кольорів має бути не менше трьох

// let list = document.getElementById('list')

// list.addEventListener('change', function () {
//     document.body.style.backgroundColor = list.options[list.options.selectedIndex].value
// })


// let color = document.getElementById('color')

// color.addEventListener('input', function () {
//     console.log(color.value)
//     document.body.style.backgroundColor = color.value
// })


// let btn = document.getElementById('btn')

// btn.addEventListener('click', function () {
//     console.log(document.forms[`form1`].gender.value)
//     alert(`Ваша стать: ${document.forms['form1'].gender.value}`)
// })