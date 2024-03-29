'use strict';

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const incomeTaxRate = 13;

/**
 * Определяет, является ли объект положительным конечным числом без применения
 * неявных преобразований типов данных.
 * @param {any} object Объект.
 * @returns {boolean} Результат определения.
 */
const isPositiveNumber = object => Number.isFinite(object) && object >= 1;

/**
 * Взимает налог с объекта налогообложения, выраженного в денежном измерении.
 * @param {number | bigint} base Налоговая база.
 * @param {number | bigint} rate Налоговая ставка, %.
 * @returns {number | bigint} Сумма денежных средств за вычетом налога.
 */
const collectTax = (base, rate) => base - (base * rate) / 100;

/**
 * Интерфейс взаимодействия с пользователем.
 */
function userInterface() {
	while (true) {
		let salary = +prompt(
			'Введите размер заработной платы до вычета подоходного налога.',
			80000
		);
		if (!isPositiveNumber(salary)) {
			console.log('Значение задано неверно.');
			continue;
		}
		salary = collectTax(salary, incomeTaxRate);
		console.log(
			`Размер заработной платы за вычетом налогов равен ${salary}.`
		);
		break;
	}
}

userInterface();
