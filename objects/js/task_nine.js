/*
	Modify task 8 to use classes instead of a function constructor
*/

console.log('*************Task 9*************');

class AnimalClass {
	constructor(name) {
		this.name = name;
	}

	run() {
		console.log(`${this.name} is running`);
	}
}

class RabbitClass extends AnimalClass {
	constructor(name) {
		super(name);
	}
}

const rClass = new RabbitClass('Rab');

console.log(rClass);
rClass.run();
