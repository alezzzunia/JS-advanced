// DOM Level 0

// let btn = document.getElementById('btn')

// btn.onclick = function () {
//     alert("Hello")
// }

// btn.onclick = function () {
//     alert("OK")
// }

// DOM Level 2

// let btn = document.getElementById('btn')

// btn.addEventListener('click', function() {
//     alert("Hello world")
// })

// btn.addEventListener('click', function() {
//     alert("World")
// })

// btn.addEventListener('click', function() {
//     alert("Hello world")
// })

// btn.addEventListener('click', function() {
//     alert("World")
// })

// btn.onclick = function () {
//     alert("000000")
// }

// -------------

// function sayHello() {
//     alert("Hello")
// }

// btn.addEventListener('click', sayHello)

// preventDefault()

// let link = document.getElementById('link')

// function linkHandler(e) {
    // console.log(e)
    // console.log(`X: ${e.x} | Y: ${e.y}`)
//     let h = 13
//     if (h > 12) {
//         e.preventDefault()
//         alert('Час на перехід по посиланню вийшов!')
//     }
// }

// link.addEventListener('click', linkHandler)

// .stopPropagation()  // Зупиняє розповсюдження подій.

// let first = document.getElementById('first')
// let second = document.getElementById('second')
// let third = document.getElementById('third')

// let isCapturing = true

// first.addEventListener('click', function() {
//     this.style.backgroundColor = 'green'
//     alert('Обробник DIV 1')
// }, isCapturing)

// second.addEventListener('click', function(e) {
//     this.style.backgroundColor = 'yellow'
//     alert('Обробник DIV 2')
// }, isCapturing)

// third.addEventListener('click', function(e) {
//     this.style.backgroundColor = 'red'
//     alert('Обробник DIV 3')
// }, isCapturing)

// Об'єкт Image

// let imagesList = document.images
// console.log(imagesList)

// imagesList[0].src = ''
// imagesList[0].style.width = '150px'
// imagesList[0].width = '400'

// let slider = document.getElementById('slider')
// let btn1 = document.getElementById('btn1')
// let btn2 = document.getElementById('btn2')

// btn1.addEventListener('click', function() {
//     slider.src = 'https://images.unsplash.com/photo-1694190371783-227c817a2488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
// })

// btn2.addEventListener('click', function() {
//     slider.src = 'https://images.unsplash.com/photo-1694501898715-6961da5a6e67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
// })

let slider = document.getElementById('img')
let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
