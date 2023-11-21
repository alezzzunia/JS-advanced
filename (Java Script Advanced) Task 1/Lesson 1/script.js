// 1

// function showHello() {
//     alert("Hello!")
// }

// let button = document.getElementById('btn')

// // button.onclick = showHello
// button.onclick = function () {
//     alert('Hello')
// }

// 2

// let count = 0

// let increase = document.getElementById('increase')
// increase.onclick = function () {
//     // count += 1
//     counter.innerText = ++count
// }
// let decrease = document.getElementById('decrease')
// decrease.onclick = function () {
//     // count -= 1
//     counter.innerText = --count
// }
// let showResult = document.getElementById('showResult')
// showResult.onclick = function () {
//     alert(`Лічильник показує ${count}`)
// }
// let counter = document.getElementById('counter')

// 3

// click - клік (ліва кнопка миші)
// contexmenu - контекстне меню (клік правою кнопкою миші)
// dblclick - подвійний клік

// 4
// mousedown - кнопка миші нажата на елементі
// mouseup - кнопка миші відпущена на елементі
// mouseover - мишка навелась на елемент
// mouseout - мишка вивелась з елементу
// mousemove - водимо мишкою в елементі

// let box = document.getElementById('box')
// box.style.transition = "1s"
// let count = 100

// box.onmousedown = function () {
//     // console.log('mousedown')
//     // box.style.width = '150px'
//     // box.style.height = '150px'
//     box.style.width = `${count+=10}px`
//     box.style.height = `${count+=10}px`
// }

// box.onmouseup = function () {
//     // console.log('mouseup')
//     // box.style.width = '100px'
//     // box.style.height = '100px'
//     // box.style.width = 
//     // box.style.height = 
// }

// box.onmouseover = function () {
//     console.log('mouseover')
// }

// box.onmouseout = function () {
//     console.log('mouseout')
// }

// box.onmousemove = function () {
//     console.log('mousemove')
// }

// Практика

// let box = document.getElementById('box')
// box.onmouseover = function () {
//     box.style.backgroundColor = 'black'
//     box.style.color = 'white'
//     box.style.borderColor = 'white'
// }

// box.onmouseout = function () {
//     box.style.backgroundColor = 'white'
//     box.style.color = 'black'
//     box.style.borderColor = 'black'
// }

let box = document.getElementById('box')
let count = 0

box.onclick = function () {
    colors = ['red', 'green', 'yellow', 'orange', 'blue']
    console.log(box)
    box.style.backgroundColor = colors[count++]
    if (count == 5) count = 0
    
    // count++
    // switch (count) {
    //     case 1:
    //         box.style.backgroundColor = 'red'
    //         break
    //     case 2:
    //         box.style.backgroundColor = 'green'
    //         break
    //     case 3:
    //         box.style.backgroundColor = 'yellow'
    //         break
    //     case 4:
    //         box.style.backgroundColor = 'orange'
    //         break
    //     case 5:
    //         box.style.backgroundColor = 'blue'
    //         count = 0
    //         break
    // }
}