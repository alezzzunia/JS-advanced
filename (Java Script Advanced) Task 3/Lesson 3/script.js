// Події клавіатури
// keydown - виникає тоді, коли нажата кнопка(триває до того моменту,
// поки не відпустите кнопку)
// keyup - виникаєж тоді, коли ми віджимаємо кнопку
// keypress - виникаж тодіЮ, коли нажата клавіша, але після події keydown 
// і до подїї keyup

// addEventListener('keydown', function(e) {
//     // console.log(e.keyCode)
//     switch (e.code) {
//         case "KeyW":
//             console.log(`Ти натиснув на клавішу ${e.key}`)
//             break
//     }
// })

// addEventListener('keyup', function() {
//     console.log('Ви відпустили клавішу!')
// })

// addEventListener('keypress', function(e) {
//     console.log(e.code)
// })

// addEventListener('keydown', function(e) {
//     console.log("keydown")
// })

addEventListener('keydown', function (e) {
    let box = document.getElementById('box')
    let cs = window.getComputedStyle(box)
    console.log(cs)
    let left = parseInt(cs.left)
    let top = parseInt(cs.top)
    let width = document.documentElement.clientWidth
    let height = document.documentElement.clientHeight
    let boxWidth = parseInt(cs.width)
    let boxHeight = parseInt(cs.height)
    switch (e.code) {
        case 'ArrowLeft':
            if (left > 0)
            box.style.left = left - 10 + `px`
            break
        case 'ArrowRight':
            if (left < (width - boxWidth))
            box.style.left = left + 10 + `px`
            break
        case 'ArrowUp':
            if (top > 0)
            box.style.top = top - 10 + `px`
            break
        case 'ArrowDown':
            if (top < (height - boxHeight))
            box.style.top = top + 10 + `px`
            break
    }
})