// AJAX

// Синхронний запит - це коли відправляємо запит на сервер і чекаємо поки він дасть відповідь, при цьому блокуючи інтерфейс.
// Асинхронний запит - це коли відправляємо запит на сервер і не потрібно чекати кінця відповіді, користувач може вільно користуватись інтерфейсом.

// Об'єкт XMLHTTPRequest

// Синхронний запит

// let btn = document.getElementById('btn')
// let output = document.getElementById('output')

// btn.addEventListener('click', function () {
//     let xhr = new XMLHttpRequest() // створення об'єкту для http-запиту
//     xhr.open('GET', './test.html', false) // Налаштування об'єкту для відправки синхронного GET-запиту.
//     xhr.send() // Відправлення запиту.
//     console.log(xhr)

//     output.innerText = xhr.responseText
// })


// Асинхронний запит

// let loading = document.getElementById('loader')
// loading.style.display = 'none'

// btn.addEventListener('click', function () {
//     let xhr = new XMLHttpRequest
//     xhr.open('GET', './test.html', true)

//     // функція-обробник спрацьовує при зміні властивості readyState
//     // Значення readyState:
//     // 0 - Метод open() ще не викликався.
//     // 1 - Метод open() вже був викликаний, але метод send() ще не викликався.
//     // 2 - Метод send() був викликаний, але відповідь від сервера ще не отримана.
//     // 3 - Йде прийом даних від сервера.
//     // 4 - Відповідь від сервера повністю отримана (запит успішно завершений).

//     xhr.onreadystatechange = function () {
//         // console.log(xhr.readyState)
//         if (xhr.readyState == 4) {
//             if (xhr.status == 200) {
//                 // loading.style.display = 'none'
//                 output.innerHTML = xhr.responseText
//             }
//         }
//     }

//     xhr.send()
//     // loading.style.display = 'block'
// })


// let btn = document.getElementById('btn')
// let img = document.getElementById('img')
// img.style.display = 'none'

// btn.addEventListener('click', function () {
//     let xhr = new XMLHttpRequest()

//     xhr.open('GET', 'https://dog.ceo/api/breeds/image/random', false)

//     xhr.send()
//     let res = JSON.parse(xhr.responseText)
//     console.log(res)
//     img.src = res.message
//     img.style.display = 'block'
// })


let search = document.getElementById('search')
let name = document.getElementById('name')
let login = document.getElementById('login')
let githubUrl = document.getElementById('githubUrl')
let blogUrl = document.getElementById('blogUrl')
let city = document.getElementById('city')
let email = document.getElementById('email')
let followers = document.getElementById('followers')
let following = document.getElementById('following')

search.addEventListener('change', function () {

})