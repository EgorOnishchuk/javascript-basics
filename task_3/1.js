'use strict';

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

/**
 * Генерирует псевдослучайное число в диапазоне [minimum, maximum], выравнивая
 * вероятность получения случайных чисел при больших объёмах генерации.
 * @param {number | bigint} minimum Минимальное число включительно.
 * @param {number | bigint} maximum Максимальное число включительно.
 * @returns {number | bigint} Псевдослучайное число.
 */
const getRandomNumber = (minimum, maximum) => {
	const randomNumber = Math.random() * (maximum + 1 - minimum) + minimum;
	return Math.floor(randomNumber);
};

/**
 * Возводит в куб переданное число. Если не передано — случайное число в
 * диапазоне [1, 10].
 * @param {number | bigint | undefined} number Возводимое число.
 * @returns {number | bigint} Число, возведённое в третью степень.
 */
const cube = number => {
	if (number === undefined) {
		return getRandomNumber(1, 10) ** 3;
	}
	return number ** 3;
};

console.log(cube(15));
console.log(cube());
console.log(cube());
