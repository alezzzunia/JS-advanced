// search() - повертає індекс першого знайденого символа підстрічки по шаблону,
// або -1, якщо підстрічка не знайдена.

// let text = 'Стрічка 1234 для тесту'
// let pattern = /\d\d\d/
// let firstIndex = text.search(pattern)
// console.log(firstIndex)


// replace() - виконує операцію пошуку з заміною, повертає результуючу стрічку.

// let text = 'Стрічка 123 для тес123ту123'
// let pattern = /\d\d\d/g
// let result = text.replace(pattern, '666')
// console.log(result)


// match() - приймає регулярний вираз і повертає масив з результатами пошуку
// Якщо не знайде, поверне null.

// let text = "4 плюс 5 2 3 2 дорівнює 9"
// let pattern = /\d \d/g
// let result = text.match(pattern)
// console.log(result)


// exec() - повертає одне значення з результату пошуку.
// Якщо не знайде, тоді null.

// let text = '4 плюс 5 дорівнює 9 2'
// let pattern = /\d/

// let res = pattern.exec(text)
// console.log(res)

// Якщо вказати ключик g, тоді він буде повертати елемент і далі шукати
// допоки не поверне null

// let text = '4 плюс 5 дорівнює 9 2'
// let pattern = /\d/g
// let res
// do {
//     res = pattern.exec(text)
//     console.log(`Елемент ${res} знайдено в позиції ${res.index}`)    
// } while (res != null);

// while ((res = pattern.exec(text)) != null) {
//     console.log(`Елемент ${res} знайдено в позиції ${res.index}`)
// }


// test() - перевіряє, чи стрічка співпадає з регулярним виразом
// Якщо так - true, якщо ні - false.

// let pattern = /\d{3}/
// let input = 'Hello world!'
// console.log(pattern.test(input))
// input = 'Hel123lo world!'
// console.log(pattern.test(input))


// Квантифікатори(квантори)

// + - один, або декілька символів

// let pattern = /\d+/
// let input = 'Hello 1world!'
// console.log(pattern.test(input))

// * - нуль, або більше символів

// let pattern = /[abc]\d*/
// let input = 'Hello bworld!'
// console.log(pattern.test(input))

// ? - нуль, або один символ

let pattern = /http/
let input = 'Hellob world!'
console.log(pattern.test(input))