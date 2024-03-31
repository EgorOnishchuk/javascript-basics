'use strict';

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

/**
 * Создаёт псевдографическую гору.
 * @param {string} symbol Заполнитель.
 * @param {number | bigint} height Высота горы, символов.
 * @returns {string} Гора.
 */
function getMountain(symbol, height) {
	let row = symbol;
	const mountain = [row];
	for (let i = 1; i <= height; i++) {
		mountain.push((row += symbol));
	}
	return mountain.join('\n');
}

console.log(getMountain('x', 20));
