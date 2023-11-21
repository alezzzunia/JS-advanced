// Object window - об'єктна модель браузера.
// innerHeight - висота контенту вікна (без панелей браузера)
// innerWidth - ширина контенту вікна (без панелей браузера)
// outerHeight - висота вікна браузера (включає панельки)
// outerWidth - ширина вікна браузера (включає панельки)
// screenLeft, screenX - відступ від лівого краю вікна браузера, до початку складу сторінки
// screepTop, screenY - відступ від верхнього краю вікна браузера, до початку складу сторінки
// scrollx, scrolly - розмір (в пікселях) зрушення контенту за рахунок смуг прокручування


// Основні методи роботи з Object Window.
// open() - відкриває нове пусте вікно браузера.
// open(link, id, attr) - відкриває нове вікно й завантажує сторінку зі значенням
// link. Вікну буде присвоюватись ім'я (id) і застосовуватись атрибути attr
// close() - закриває вікно.
// moveTo() - переміщає вікно в місце по заданих кординатах.
// moveBy() - переміщає розсташування вікна нашого браузера по кожній координаті.
// resizeTo() - встановлює розміри вікна.
// resizeBy() - додає до розміру вікна передані значення.

// let openWindow = document.getElementById('open')
// let closeWindow = document.getElementById('close')
// let focusWindow = document.getElementById('focus')
// let blurWindow = document.getElementById('blur')
// let moveToWindow = document.getElementById('moveto')
// let moveByWindow = document.getElementById('moveby')
// let resizeToWindow = document.getElementById('resizeto')
// let resizeByWindow = document.getElementById('resizeby')
// let newWindow

// openWindow.addEventListener('click', function() {
//     newWindow = window.open('/Lesson 6/index.html', 'stepSite', 'width=500, height=500, top=200, left=200')
// })

// closeWindow.addEventListener('click', function() {
//     newWindow.close()
// })

// focusWindow.addEventListener('click', function() {
//     newWindow.focus()
// })

// blurWindow.addEventListener('click', function() {
//     newWindow.blur()
// })

// moveToWindow.addEventListener('click', function() {
//     newWindow.moveTo(100, 100)
// })

// moveByWindow.addEventListener('click', function() {
//     newWindow.moveBy(20, 20)
// })

// resizeToWindow.addEventListener('click', function() {
//     newWindow.resizeTo(100, 100)
// })

// resizeByWindow.addEventListener('click', function() {
//     newWindow.resizeBy(20, 20)
// })

// Object navigator


// Frames