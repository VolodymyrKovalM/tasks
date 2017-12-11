/*
	- Опишите конструктор объектов (класс) Calculator с двумя методами:
	add - принимает число и прибавляет его к предыдущему, getCurrentSum - принимает индекс
	и возвращает результирующее число на шаге указанном
	в индексе (если индекса нет, возвращает текущую сумму)
	- Создайте два экземпляра класса Calculator
	- Добавьте в первый объект числа 3,8,11 и во второй 5,12,17.
	- Выведите в консоль сумму:
			всех чисел всех объектов, убедитесь (56)
			сумму чисел всех объектов на втором шаге (28)
			для одного объекта сумму после третьего шага и общую результирующую сумму (должна совпадать)
*/

console.log('*************Task 6*************');

function Calculator() {
	this.total = 0;
	this.steps = [];

	this.add = function add(num) {
		const prev = this.steps.length === 0 ? 0 : this.steps[this.steps.length - 1];
		this.total += num;
		this.steps.push(prev + num);
		console.log(this.steps);
	};

	this.getCurrentSum = function getCurrentSum(index) {
		return this.steps[index - 1];
	};
}

const calc1 = new Calculator();
const calc2 = new Calculator();

calc1.add(3);
calc1.add(8);
calc1.add(11);

calc2.add(5);
calc2.add(12);
calc2.add(17);

/* Выведите в консоль сумму: */
/* всех чисел всех объектов, убедитесь (56) */

console.log(calc1.total + calc2.total);

/* сумму чисел всех объектов на втором шаге (28) */
console.log(calc1.getCurrentSum(2) + calc2.getCurrentSum(2));

/* для одного объекта сумму после третьего шага и общую результирующую сумму (должна совпадать) */
console.log(calc1.total === calc1.getCurrentSum(3));
