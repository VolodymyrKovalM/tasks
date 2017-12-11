/*
	Create an object `animal` with shared method `run` that outputs
	'[name] is running', where [name] is placeholder for animal name

	Create a function constructor for Rabbit that when instantiated
	accepts the name of the animal and stores it on the instance

	Set `animal` as a prototype for instances of the Rabbit

	Instantiate Rabbit instance and call `run` method
*/

console.log('*************Task 8*************');

function Animal(name) {
	this.name = name;
}

Animal.prototype.run = function run() {
	console.log(`${this.name} is running`);
};

function Rabbit(name) {
	Animal.call(this, name);
}

Rabbit.prototype = new Animal();
Rabbit.prototype.constructor = Rabbit;

delete Rabbit.prototype.name;

const r1 = new Rabbit('Rab');
console.log(r1);
r1.run();
