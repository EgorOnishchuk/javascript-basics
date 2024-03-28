'use strict';

/*
Создать переменные positive и negative, в которые пользователь вводит с 
клавиатуры значения. Нужно попросить пользователя ввести положительное число в 
переменную positive и отрицательное в переменную negative. 
Перед тем, как положить значения в данные переменные необходимо их превратить 
в числа.
После ввода значений, необходимо вывести "Все значения верные.", если 
пользователь действительно ввел корректные значения, которые мы просили его 
ввести.
Если же пользователь где-то ввел неверное значение, то необходимо вывести 
в консоль "Одно или более значений некорректно.".
*/

const positiveNumber = +prompt(
	'Введите положительное число. Если Вы ничего не введёте, в качестве ' +
		'ввода будет принят 0.',
	5
);
const negativeNumber = +prompt(
	'Введите отрицательное число. Если Вы ничего не введёте, в качестве ' +
		'ввода будет принят 0.',
	-5
);

console.log(
	Number.isFinite(positiveNumber) &&
		positiveNumber >= 1 &&
		Number.isFinite(negativeNumber) &&
		negativeNumber <= -1
		? 'Все значения верные.'
		: 'Одно или более значений некорректно.'
);
