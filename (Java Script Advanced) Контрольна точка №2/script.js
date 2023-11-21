let allUsers = document.getElementById('allUsers')
let container = document.getElementById('container')
let containerInfo = document.getElementById('containerInfo')

allUsers.addEventListener('click', function () {
    allUsers.style.display = 'none'

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            data.forEach(element => {
                let box = document.createElement('div')
                box.setAttribute('class', 'box')
                box.setAttribute('data-id', element.id)
                box.style.border = '1px solid black'
                box.style.padding = '1vh 1vw'
                box.style.margin = '0.5vh 1vw'
                box.style.cursor = 'pointer'
                let span = document.createElement('span')
                span.setAttribute('class', 'name')
                span.innerText = element.name
                box.appendChild(span)
                container.appendChild(box)
                box.addEventListener('click', function () {
                    // console.log(span.innerText);
                    // containerInfo.removeChild(containerInfo.lastChild)
                    let userInfo = document.createElement('span')
                    userInfo.innerText = 'User Info'
                    let infoBox = document.createElement('div')
                    infoBox.setAttribute('class', 'infoBox')
                    
                    fetch(`https://jsonplaceholder.typicode.com/users/${element.id}`)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => {
                        console.log(data)
                        

                        
                    })



                    
                    containerInfo.appendChild(userInfo)
                    containerInfo.appendChild(infoBox)
                    
                    // data.forEach(element => {


                    // let infoField = document.createElement('div')
                    // infoField.setAttribute('id', 'box' + element.id)
                    // infoField.style.border = '1px solid black'
                    // infoField.style.padding = '1vh 1vw'
                    // let name = document.createElement('div')
                    // name.innerText = "Name"
                    // let fieldName = document.createElement('div')
                    // fieldName.innerText = element.name

                    // infoBox.appendChild(infoField)

                    // })

                })
            });
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            console.log('Finished')
        })
})

// box.addEventListener('click', function () {
//     let userInfo = document.createElement('span')
//     userInfo.innerText = 'User Info'
//     let infoBox = document.createElement('div')
//     infoBox.setAttribute('class', 'infoBox')
//     let info = forEach(element => {
//         let infoField = document.createElement('div')
//         infoField.setAttribute('class', element.username)
//         infoField.style.border = '1px solid black'
//         infoField.style.padding = '1vh 1vw'
//         let name = document.createElement('div')
//         name.innerText = "Name"
//         let fieldName = document.createElement('div')
//         fieldName.innerText = element.name


//     })


//     infoBox.appendChild(info)
//     containerInfo.appendChild(infoBox)
//     containerInfo.appendChild(userInfo)
// })