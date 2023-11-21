// fetch

let btn = document.getElementById('btn')
let box = document.getElementById('box')

btn.addEventListener('click', function () {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            // Перетворення отриманих даних в формат JSON
            return response.json()
        })
        .then(data => {
            // Обробка даних, які повернув сервер.
            console.log(data)

            data.forEach(element => {
                let col = document.createElement('div')
                col.setAttribute('class', 'col-6')
                let card = document.createElement('div')
                card.setAttribute('class', 'card')
                let card_body = document.createElement('div')
                card_body.setAttribute('class', 'card-body')
                let h5 = document.createElement('h5')
                h5.setAttribute('class', 'card-title')
                h5.innerText = element.name
                card_body.appendChild(h5)
                let p = document.createElement('p')
                p.setAttribute('class', 'card-text')
                p.innerText = element.email
                card_body.appendChild(p)
                let a = document.createElement('a')
                a.setAttribute('class', 'btn btn-primary')
                a.setAttribute('href', 'https://google.com')
                a.innerText = 'Click me!'
                card_body.appendChild(a)
                card.appendChild(card_body)
                col.appendChild(card)
                box.appendChild(col)
            });
            // < div class="card" >
            //     <div class="card-body">
            //         <h5 class="card-title">Card title</h5>
            //         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //         <a href="#" class="btn btn-primary">Go somewhere</a>
            //     </div>
            // </div>
        })
        .catch(error => {
            // Виконується тоді, коли сервер поверне помилку
            console.log(error)
        })
        .finally(() => {
            // Виконується завжди
            console.log('Finally')
        })

})


// fetch('')