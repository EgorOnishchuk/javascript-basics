'use strict';

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

/**
 * Определяет максимальное из неограниченного количества чисел.
 * @param  {...number | bigint} numbers Числа.
 * @returns {number} Максимальное число.
 */
const getMaximalNumber = (...numbers) => Math.max(...numbers);

/**
 * Интерфейс взаимодействия с пользователем.
 */
function userInterface() {
	let currentNumber = 1;
	const number1 = prompt(`Введите ${currentNumber++} число.`, 1);
	const number2 = prompt(`Введите ${currentNumber++} число.`, 3);
	const number3 = prompt(`Введите ${currentNumber} число.`, 2);
	const maximalNumber = getMaximalNumber(number1, number2, number3);
	console.log(
		`Максимальное значение среди чисел ${number1}, ${number2}, ` +
			`${number3} равно ${maximalNumber}.`
	);
}

userInterface();
