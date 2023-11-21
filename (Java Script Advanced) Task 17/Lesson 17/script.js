$(function () {

    // .en(n) - повертає елемент по індексу "n".
    // .not(n) - не бере юо уваги елементи, які вказані по заданому виразу "n"

    // .is(n) - перевіряє поточний набір елементів на відповідність вказаному виразу "n"


    // $('div').on('click', function () {
    //     if ($(this).is(':first-child')) {
    //         $('p').text('Це перший div')
    //     } else if ($(this).is('.blue, .red') ) {
    //         $('p').text('Це синій або червоний div')
    //     } else if ($(this).is(':contains("Test")')) {
    //         $('p').text('Цей div містить слово "Test".')
    //     } else {
    //         $('p').text('Цей div не містить нічого особливого!')
    //     }
    // })


    // filter(selector) - в якості параметра може бути передано селектор, який використовується для відповідних йому елементів.
    // Фільтрує все по селектору.

    // $('p')
    //     .filter('.test')
    //     .css('.background-color', 'red')

    // $('p')
    //     .filter(':odd')
    //     .css('background-color', 'green')

    // $('p')
    //     .filter(function (index) {
    //         if ($(this).attr('align') && index == 0) {
    //             return true
    //         }
    //     })
    //     .css('background-color', 'red')


    // .first() - повертає тільки перший елемент.
    // .last() - повертає тільки останній елемент.

    // $('p')
    //     .first()
    //     .css('color', 'red')

    // $('p')
    //     .last()
    //     .css('color', 'aqua')


    // 

    // Пошук і переміщення по DOM

    // 

    // add(selector) - додає в вже існуючу вибірку елементів, які відповідають вказаному виразу.

    // $('p')
    //     .add('span')
    //     .css('background-color', 'red')

    // find(selector) - шукає дочірні елемента, які відповідають виразу

    // $('p')
    //     .find('span')
    //     .css('color', 'red')

    // parent() - повертає посилання на найближчого батьківського елемента.

    // $('p')
    //     .parent()
    //     .css('background-color', 'red')


    // 

    // Вставка і маніпуляції елементами

    // 

    // .html() - отримує HTML-вміст певного елемента або встановлює HTML-розмітку для елемента.

    // $('div.box')
    //     .html(
    //         `
    //         <div  class='card>
    //             <h1>Text</h1>
    //         </div>
    //         `
    //     )

    // .text() - отримує текст або замінює його.

    // Додає в кінець:

    // .append() - додає елемент всередину кожного елемента виборі. В кінець

    // $('table')
    //     .append('<tr><td>1</td><td>2</td>')

    // for (let index = 0; index < 10; index++) {
    //     $('table')
    //     .append('<tr><td>1</td><td>2</td>')
    // }

    // appendTo() - додає всі елементи набору до вказаного набору елементів. Додає елементи після створення вже створених елементів.

    // $('<b>Hello world!</b>').appendTo('.test')

    // Додає в початок:

    // prepend() - додає контент всередину кожного елемента виборі. На початок.
    // prependTo() - додає всі елементи набору до вказаного набору елементів. Додає елементи перед вже створеними елементами.

    // $('table')
    //     .prepend('<tr><td>1</td><td>2</td>')

    // $('<b>Hello world!</b>').prependTo('.test')

    // wrap() - вставляє кожен співпавший елемент набору в вказану конструкцію HTML коду.
    // empty() - видаляє всю вмістимість із кожного елементу в наборі співпавшого.
    // remove() - видаляє всі співпавші елементи з DOM.


    // $('span').wrap('<div>')
    // $('#clearButton').on('click', function () {
    //     $('p').empty()
    // })
    // $("#removeButton").on('click', function () {
    //     $('span').remove()
    // })

    $('#slide').on('click', function () {
        $('#slider').slideToggle()
        $('#slider').val('Slide Up')
    })

})