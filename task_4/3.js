'use strict';

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

/**
 * Генерирует псевдослучайное число в диапазоне [minimum, maximum], выравнивая
 * вероятность получения случайных чисел при больших объёмах генерации.
 * @param {number} minimum Минимальное число включительно.
 * @param {number} maximum Максимальное число включительно.
 * @returns {number} Псевдослучайное число.
 */
const getRandomNumber = (minimum, maximum) =>
	Math.floor(Math.random() * (maximum + 1 - minimum) + minimum);

/**
 * Генерирует массив псевдослучайных чисел в диапазоне [minimum, maximum]
 * длиной в amount, выравнивая вероятность получения случайных чисел при
 * больших объёмах генерации.
 * @param {number} minimum Минимальное число включительно.
 * @param {number} maximum Максимальное число включительно.
 * @param {number | bigint} amount Количество чисел.
 * @returns {[number]} Массив.
 */
function getRandomNumbers(minimum, maximum, amount) {
	const array = [];
	for (let i = 1; i <= amount; i++) {
		array.push(getRandomNumber(minimum, maximum));
	}
	return array;
}

/**
 * Определяет сумму элементов числового массива.
 * @param {[number]} array Массив чисел.
 * @returns {number} Сумма.
 */
const getNumbersSum = array =>
	array.reduce((element1, element2) => element1 + element2, 0);

/**
 * Определяет максимальное число в массиве.
 * @param {[number]} array Массив чисел.
 * @returns {number} Максимальное число.
 */
const getMaximalNumber = array => Math.max(...array);

/**
 * Определяет индексы элементов числового массива, значения которых равны
 * value.
 * @param {[number]} array Массив чисел.
 * @param {number} value Значение.
 * @returns {[number]} Массив индексов.
 */
function getIndexes(array, value) {
	const result = [];
	array.forEach((number, i) => {
		if (number === value) {
			result.push(i);
		}
	});
	return result;
}

const numbersArray = getRandomNumbers(0, 9, 5);
console.log(numbersArray);
console.log(
	getNumbersSum(numbersArray),
	getMaximalNumber(numbersArray),
	getIndexes(numbersArray, 3)
);
