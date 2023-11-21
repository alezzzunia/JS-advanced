// let player = document.getElementById('player')
// let playPlayer = document.getElementById('play')
// let stopPlayer = document.getElementById('stop')


// Основні властивості та методи:
// play() - починає відтворення з поточної позиції.
// pause() - призупиняє відтворення аудіо.

// paused - якщо відтворення зупинено, тоді верне true.
// currentTime - визначає поточну позицію відтворення аудіо (сек).
// duration - тривалість аудіо в секундах.
// muted - true, якщо виключений звук.
// ended - true, якщо відтворення завершено.
// currentSrc - стрічка, яка представляє адресу медіафайлу.
// volume - звук від 0.0 до 1.0 
// loop - якщо true - тоді повторювати вічно

// playPlayer.addEventListener('click', function () {
//     player.play()
// })

// stopPlayer.addEventListener('click', function () {
//     player.pause()
// })


// VIDEO
// Ті ж самі властивості і атрибути, що і в аудіо-плеєрі
// let player = document.getElementById('player')
// let playPlayer = document.getElementById('play')
// let stopPlayer = document.getElementById('stop')

// playPlayer.addEventListener('click', function () {
//     player.play()
// })

// stopPlayer.addEventListener('click', function () {
//     player.pause()
// })

// window.addEventListener('load', function () {

// let player = document.getElementById('player')
// let playPlayer = document.getElementById('play')
// let songDuration = document.getElementById('duration')

// songDuration.min = 0
// songDuration.max = player.duration
// songDuration.value = 0

// playPlayer.addEventListener('click', function () {
//     if (player.paused) {
//         player.play()
//         playPlayer.value = 'Stop'
//     } else {
//         player.pause()
//         playPlayer.value = 'Play'
//     }
// })

// songDuration.addEventListener('input', function () {
//     console.log(songDuration.value)
//     player.currentTime = songDuration.value
// })
// })


