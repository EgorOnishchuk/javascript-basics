'use strict';

/*
Необязательное задание.
Если вам показалось домашнее задание простым, выполняем данный пункт.

Необходимо от пользователя получить целое число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: Пользователь всегда вводит корректное положительное целое число.
Подсказка: Возможно, вам понадобится округление чисел и оператор %.
*/

const number = prompt('Введите положительное целое число.').slice(-3);

let units;
number.at(-1) !== undefined ? (units = number.at(-1)) : (units = '0');

let dozens;
number.at(-2) !== undefined ? (dozens = number.at(-2)) : (dozens = '0');

let hundreds;
number.at(-3) !== undefined ? (hundreds = number.at(-3)) : (hundreds = '0');

alert(`Количество сотен: ${hundreds}, десятков: ${dozens}, единиц: ${units}.`);
