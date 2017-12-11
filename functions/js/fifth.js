const j = {
	name: 'John',
	type: 'male',
	age: 25,
};

function printDetails(obj) {
	const { name, type, age } = obj;
	return `${name} (${type}) - ${age}`;
}

console.log(printDetails(j));

/* USING this instead of argument */

function printDetailsModified() {
	return `${this.name} (${this.type}) - ${this.age}`;
}

const cl = printDetailsModified.call(j);
const apl = printDetailsModified.apply(j);
const b = printDetailsModified.bind(j);

console.log(`Using call: ${cl}`);
console.log(`Using apply: ${apl}`);
console.log(`Using bind: ${b()}`);
