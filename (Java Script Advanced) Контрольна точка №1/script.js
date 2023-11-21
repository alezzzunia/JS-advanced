// Navigation Buttons

let borderNav = document.getElementById('borderNav')
let borderRadiusNav = document.getElementById('borderRadiusNav')
let colorNav = document.getElementById('colorNav')
let transformNav = document.getElementById('transformNav')
let boxShadowNav = document.getElementById('boxShadowNav')

borderNav.addEventListener('click', function () {
    document.querySelector('.border').style.display = 'block'
})

borderRadiusNav.addEventListener('click', function () {
    document.querySelector('.border').style.display = 'none'
    document.querySelector('.border-radius').style.display = 'block'
})


// Copy Button


// let copyMeBtn = document.getElementById('copyMeBtn')
// copyMeBtn.addEventListener("click", () => {
//     navigator.clipboard.writeText(codeOutput.innerText)
//     copyMeBtn.innerText = 'Сopied ＼(^▽^)ノ'
// })