$(function () {

    // animate() - виконує задану користувачем анімацію з вибраними елементами.

    // 1. Виконання анімації.
    // $('div').animate({
    //     opacity: 0.30,
    //     marginLeft: '150px'
    // }, 1000, function () {
    //     alert('Animation Completed')
    // })

    // 2. Добавлення декількох анімацій підряд

    // $('div')
    //     .animate({
    //     opacity: 0.25,
    //     marginLeft: "550px"
    // }, 5000)
    // .animate({
    //     opacity: 1,
    //     marginLeft: "0" 
    // }, 5000)
    // .animate({
    //     marginLeft: "550px",
    //     marginTop: "200px"
    // }, 5000)

    // 3. Використання duration параметрами по замовчуванню.
    // fast - 200ms
    // slow - 600ms
    // default duration - 400ms

    // $('div')
    //     .animate({
    //         marginLeft: "100px"
    //     }, 'fast')
    //     .animate({
    //         marginLeft: "0"
    //     }, 'slow')

    // 4. Параметр queue - вказує, чи потрібно поміщати поточну анімацію в чергу функцій.
    // Вказує чи виконуються анімації одночасно чи по черзі
    // queue: false - заставляє другу анімацію виконуватись паралельно з першою. (default - true)

    // $("div")
    //     .animate({
    //         marginTop: "150px",
    //         marginLeft: "150px"
    //     }, {
    //         queue: false,
    //         duration: 5000
    //     })
    //     .animate({
    //         width: '50px',
    //         height: '50px'
    //     }, {
    //         duration: 5000
    //     })

    // Приклад:

    // let anim_block = $('#anim_block')

    // let options_for_div_over = {
    //     width: '300px',
    //     height: '200px'
    // }

    // let option_for_div_out = {
    //     width: '100px',
    //     height: '21px'
    // }

    // anim_block.mouseover(function () {
    //     anim_block.animate(options_for_div_over, 500)
    // })

    // anim_block.mouseout(function () {
    //     anim_block.animate(option_for_div_out, 500)
    // })

    // ------------------------------
    // Ефекти
    // ------------------------------

    // show() - функція відображає кожен елемент набору, якщо вони приховані.

    // $('#show1').on('click', function () {
    //     $('p').show()
    // })

    // $('#show2').on('click', function () {
    //     $('#div1').show('slow')
    //     // slow - 600
    //     // normal - 400
    //     // fast - 200
    //     // (ms)
    // })

    // $('#show3').on('click', function () {
    //     $('#div2').show('normal', func)
    // })

    // function func() {
    //     $('#div2 > span').show()
    // }

    // hide() - робить невидимим будь-який елемент.

    // $('#hide1').on('click', function () {
    //     $('p').hide()
    // })

    // $('#hide2').on('click', function () {
    //     $('#div1').hide('slow')
    // })

    // $('#hide3').on('click', function () {
    //     $('#div2').hide('normal', func)
    // })

    // function func() {
    //     alert('Not visible!')
    // }

    // toggle() - функція, яка перемикає режим відображення елемента.
    // Якщо сховано - показує, якщо ні - приховує.

    // 1.
    // $('#toggle').on('click', function () {
    //     $('p').toggle()
    // })

    // 2.

    // $('#btn1').on('click', function () {
    //     $('p').toggle(5000)
    // })


    // slideUp() - функція приховує всі елементи набору, використовуючи ефект зміни висоти.

    // Ex. 1

    // $('p').on('click', function () {
    //     if ($('div').is(':hidden')) {
    //         $('div').show('slow')
    //     }
    //     else {
    //         $('div').slideUp()
    //     }
    // })

    // Ex. 2

    // $('button').on('click', function () {
    //     $(this).parent().slideUp('slow', function () {
    //         $('#msg').text(`Кнопка ${$(this).text()} прихована!`)
    //     })
    // })


    // slideToggle() - перемикач видимості елементів.

    // $('#btn1').on('click', function () {
    //     $('p').slideToggle('slow')
    // })

    // fadeIn() - функція робить видимими всі елементи набору, використовуючи прозорість елемента.

    // $('p').on('click', function () {
    //     $('div:hidden:first').fadeIn()
    // })

    // fadeOut() - плавно робить елементи невидимим, змінюючи прозорість.

    // $('div').on('click', function () {
    //     $(this).fadeOut('slow')
    // })

    // fadeTo() - змінює прозорість до тієї, яку ми вказали.

    // $('p').on('click', function () {
    //     $(this).fadeTo('slow', 0.33)
    // })


    // Черга - набір із всіх анімацій, які застосовуються до певного елемента.

    // delay() - функція, яка зупиняє виконання анімації на час, який ми вказали.

    // $('#btn1').on('click', function () {
    //     $('p')
    //         .fadeOut('slow')
    //         .delay(1000)
    //         .fadeIn('slow')
    // })

    // queue() - відображає масив функцій, які повинні бути виконані для вказаного елемента.
    // 'fx' - черга зі всієї анімації

    // let div = $('div')

    // function runIt() {
    //     div.show('slow')
    //     div.animate({
    //         left: '+=200'
    //     }, 2000)
    //     div.slideToggle(1000)
    //     div.slideToggle('fast')
    //     div.animate({
    //         left: '-=200'
    //     }, 1500)
    //     div.hide('slow')
    //     div.show(1200)
    //     div.slideUp('normal', runIt)
    // }

    // function showQueueLenght() {
    //     let q = div.queue('fx')
    //     $('span').text(`Queue length is: ${q.length}`)
    //     setTimeout(showQueueLenght, 100)
    // }

    // runIt()
    // showQueueLenght()


    // dequeue() - функція виконує наступну функцію в черзі для відповідних елементів.

    // $('input').on('click', function () {
    //     $('div')
    //         .animate({
    //             left: '200px'
    //         }, 2000)
    //         .animate({
    //             top: '0px'
    //         }, 600)
    //         .queue(function () {
    //             $(this).toggleClass('red').dequeue()
    //         })
    //         .animate({
    //             left: '10px',
    //             top: '30px'
    //         }, 700)
    // })

    // clearQueue() - видалити всі черги.

    // let div = $('div')

    // $('#btn1').on('click', function () {
    //     div.clearQueue()
    // })

    // function runIt() {
    //     div.show('slow')
    //     div.animate({
    //         left: '+=200'
    //     }, 2000)
    //     div.slideToggle(1000)
    //     div.slideToggle('fast')
    //     div.animate({
    //         left: '-=200'
    //     }, 1500)
    //     div.hide('slow')
    //     div.show(1200)
    //     div.slideUp('normal', runIt)
    // }

    // function showQueueLength() {
    //     let q = div.queue('fx')
    //     $('span').text(`Queue length is: ${q.length}`)
    //     setTimeout(showQueueLength, 100)
    // }

    // runIt()
    // showQueueLength()


    // stop() - зупиняє виконання поточної анімації.

    // $('#go').on('click', function () {
    //     $('.block')
    //         .animate({
    //             left: '1000px'
    //         }, 2000)
    //         .animate({
    //             top: '200px'
    //         }, 1000)
    // })

    // $('#stop').on('click', function () {
    //     $('.block').stop()
    // })

    // $('#back').on('click', function () {
    //     $('.block')
    //         .animate({
    //             left: 0
    //         })
    // })



})