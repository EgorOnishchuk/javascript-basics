'use strict';

/*
Необходимо создать переменную dayNumber, в которую пользователь должен ввести 
целое число в интервале [1, 32).
Если пользователь ввел иное значение, необходимо вывести в консоль 
"Неверное значение".
Если пользователь ввел верное значение, в нужном диапазоне, то необходимо 
определить, в какую декаду месяца попадает это число и вывести сообщение в 
консоль: "Число N1 попадает в N2 декаду месяца.", где вместо N1 и N2 будут 
подставлены подходящие значения, которые мы получили.

Примечание: выражение [1, 32) означает от 1 включительно, до 32, не включая 
число 32.
*/

const decades = [
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
	[11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
	[21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
	[31],
];
const monthFirstDay = decades[0][0];
const monthLastDay = decades[3][0];

const dayNumber = +prompt('Введите число любого месяца.');

if (dayNumber >= monthFirstDay && dayNumber <= monthLastDay) {
	for (let i = 0; i < decades.length; i++) {
		if (decades[i].includes(dayNumber)) {
			console.log(
				`Число ${dayNumber} попадает в ${i + 1} декаду месяца.`
			);
		}
	}
} else {
	console.log('Вы ввели неверное значение.');
}