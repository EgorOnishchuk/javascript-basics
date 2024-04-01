'use strict';

/*
Необходимо создать объект, в котором будут объединены два массива en и ru 
так, чтобы в объекте ключами выступали значения из массива en, а значениями 
объекта являлись значения из массива ru.
*/

const en = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const ru = [
	'понедельник',
	'вторник',
	'среда',
	'четверг',
	'пятница',
	'суббота',
	'воскресенье',
];

/**
 * Формирует объект, ключами которого является массив keys, а
 * значениями — массив values. Если в массивах неравное количество элементов,
 * формирует объект, пока не закончатся пары.
 * @param {Array} keys Массив ключей.
 * @param {Array} values Массив значений.
 * @returns {object} Объект.
 */
function getObject(keys, values) {
	const object = {};
	for (let i = 0; i < keys.length && i < values.length; i++) {
		object[keys[i]] = values[i];
	}
	return object;
}

console.log(getObject(en, ru));
