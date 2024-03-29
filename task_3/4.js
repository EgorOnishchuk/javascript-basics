'use strict';

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

/**
 * Складывает 2 числа.
 * @param {number | bigint} number1 Первое число.
 * @param {number | bigint} number2 Второе число.
 * @returns {number | bigint} Сумма.
 */
const add = (number1, number2) => number1 + number2;

/**
 * Вычитает из большего числа меньшее.
 * @param {number | bigint} number1 Первое число.
 * @param {number | bigint} number2 Второе число.
 * @returns {number | bigint} Разность.
 */
const subtract = (number1, number2) =>
	Math.max(number1, number2) - Math.min(number1, number2);

/**
 * Умножает 2 числа.
 * @param {number | bigint} number1 Первое число.
 * @param {number | bigint} number2 Второе число.
 * @returns Произведение.
 */
const multiply = (number1, number2) => number1 * number2;

/**
 * Делит 2 числа без остатка.
 * @param {*} number1 Делимое.
 * @param {*} number2 Делитель.
 * @returns Частное. При делении на ноль — бесконечность.
 */
const divide = (number1, number2) => number1 / number2;

/**
 * Калькулятор четырёх базовых арифметических операций.
 * @param {number | bigint} number1 Первое число.
 * @param {number | bigint} number2 Второе число.
 */
function calculator(number1, number2) {
	console.log(add(number1, number2));
	console.log(subtract(number1, number2));
	console.log(multiply(number1, number2));
	console.log(divide(number1, number2));
}

calculator(4, 9);
