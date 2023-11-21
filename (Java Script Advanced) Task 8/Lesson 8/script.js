// let setCoockie = document.getElementById('set')
// let getCoockie = document.getElementById('get')
// let deleteCoockie = document.getElementById('delete')

// setCoockie.addEventListener('click', function () {
//     // document.cookie = 'login=tom'
//     document.cookie = 'login=tom;max-age=604800'
//     document.cookie = 'fasdads=tom;max-age=604800'
// })

// getCoockie.addEventListener('click', function () {
//     alert(document.cookie)
//     console.log(findCoockieValue('login'))
// })

// deleteCoockie.addEventListener('click', function () {
//     document.cookie = 'login=tom;max-age=0'
// })

// function findCoockieValue(cookieName) {
//     let allCoockie = document.cookie
//     let pos = allCoockie.indexOf(`${cookieName}=`)

//     if (pos != -1) {
//         let start = pos + cookieName.length + 1
//         let end = allCoockie.indexOf(';', start)
//         if (end == -1) end = allCoockie.length
//         return allCoockie.substring(start, end)
//     }
// }


// Local Storage
// localStorage.setItem('login', 'tom')

// let setCoockie = document.getElementById('set')
// let getCoockie = document.getElementById('get')
// let deleteCoockie = document.getElementById('delete')

// setCoockie.addEventListener('click', function () {
//     localStorage.setItem('login', 'tom')
// })

// getCoockie.addEventListener('click', function () {
//     alert(localStorage.getItem('login'))
// })

// deleteCoockie.addEventListener('click', function () {
//     localStorage.removeItem('login')
// })


// 1
// let red = document.getElementById('red')
// let green = document.getElementById('green')
// let blue = document.getElementById('blue')
// let saveBtn = document.getElementById('savebtn')
// let color = ''


// let saved = localStorage.getItem('backgroundColor')
//     if (saved != color) document.body.style.backgroundColor = color

// function saveBackgroundColor (color) {
//     document.body.style.backgroundColor = color
//     localStorage.setItem('backgroundColor', color)
// }

// saveBtn.addEventListener('click', function () {
//     saveBackgroundColor(color)
// })

// red.addEventListener('click', function () {
//     color = 'red'
// })

// green.addEventListener('click', function () {
//     color = 'green'
// })

// blue.addEventListener('click', function () {
//     color = 'blue'
// })

// let btn = document.getElementById('btn')

// document.body.style.backgroundColor = localStorage.getItem('backgroundColor')

// btn.addEventListener('click', function () {
//     let selectedColor = document.forms['formColor'].color.value
//     localStorage.setItem('backgroundColor', selectedColor)
//     document.body.style.backgroundColor = localStorage.getItem('backgroundColor')
// })


// 2

// let date = new Date

// if (localStorage.getItem('date') !== null) {
//     document.write(`Ви заходили на сторінку о: ${localStorage.getItem('date')}`)
// } else {
//     document.write(`Ви на сторінці вперше!`)
// }
// localStorage.setItem("date", date)


// 3

