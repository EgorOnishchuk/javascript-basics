'use strict';

/*
Дан объект numbers. 
Необходимо в консоль вывести все значения объекта, которые больше или равны 3.
*/

const numbers = {
	key1: 12,
	key2: 2,
	key3: 4,
	key4: 1,
	key5: -244,
	key6: 0,
	key7: 7,
};

/**
 * Фильтрует значения object по callbackFunction.
 * @param {object} object Объект.
 * @param {Function} callbackFunction Предикат.
 * @returns {Array} Массив отфильтрованных значений.
 */
const filter = (object, callbackFunction) =>
	Object.values(object).filter(callbackFunction);

console.log(filter(numbers, number => number >= 3).join(' '));
